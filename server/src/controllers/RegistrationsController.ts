import { Request, response, Response } from "express";
import db from "../database/connection";
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

export default class RegistrationsController {
  async create(request: Request, response: Response) {
    const salt = "$2b$16$U/SMclK9FvsEIDIVskmFke";

    const { name, lastName, email, pass } = request.body;
    const password = bcrypt.hashSync(pass, salt);

    const checkEmail = await db("clients")
      .where({ email: email })
      .count("* as total");

    if (checkEmail[0].total > 0) {
      return response.status(400).send({
        message:
          "E-mail already registered. It will not be possible to continue",
      });
    }

    const tsx = await db.transaction();

    try {
      const insertedUsersIds = await tsx("clients").insert({
        name,
        lastName,
        email,
        password,
      });

      await tsx.commit();

      const token = jwt.sign({ id: insertedUsersIds[0] }, "secret", {
        expiresIn: "1h",
      });

      return response.status(201).send({ token });
    } catch (error) {
      await tsx.rollback();
      console.log(error);

      return response.status(400).json({
        error: "Unexpected error while creating new client",
      });
    }
  }

  async index(request: Request, response: Response) {
    const { email, password } = request.body;

    try {
      const [user] = await db("clients").where({ email: email }).select("*");

      if (!user) {
        return response.status(400).json({ error: "User not found" });
      }

      if (!(await bcrypt.compare(password, user.password))) {
        return response.status(400).json({ error: "Invalid password" });
      }

      const token = jwt.sign({ id: user.id }, "secret", {
        expiresIn: "1h",
      });

      return response.json({
        user,
        token,
      });
    } catch (err) {
      return response.status(400).json({ error: "User authentication failed" });
    }
  }
}
