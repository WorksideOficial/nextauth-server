import { Request, Response } from "express";
import { AuthService } from "../services/AuthService";
import { AuthRepository } from "../repositories/AuthRepository";

export default {
  async authUser(request: Request, response: Response) {
    const { email, password } = request.body;

    const authUser = new AuthService(new AuthRepository());

    const user = await authUser.execute(email, password);

    return response.json({ user })
  }
}