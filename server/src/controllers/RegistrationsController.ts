import { Request, Response } from "express";
import db from "../database/connection";
const bcrypt = require("bcrypt");

export default class RegistrationsController {
  async create(request: Request, response: Response) {
    const saltRounds = 15;
    const salt = bcrypt.genSaltSync(saltRounds);

    const { name, lastname, email, pass } = request.body;
    const password = bcrypt.hashSync(pass, salt);

    const tsx = await db.transaction();

    try {
      const insertedUsersIds = await tsx("clients").insert({
        name,
        lastname,
        email,
        password,
      });

      await tsx.commit();

      return response.status(201).send();
    } catch (error) {
      await tsx.rollback();
      console.log(error);

      return response.status(400).json({
        error: "Unexpected error while creating new client",
      });
    }
  }
}
