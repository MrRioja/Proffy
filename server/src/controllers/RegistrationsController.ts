import { Request, Response } from "express";
import db from "../database/connection";

export default class RegistrationsController {
  async create(request: Request, response: Response) {
    const { name, lastname, email, password } = request.body;

    return response.json({ message: "Register" });
  }
}
