import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";
import { UserRepository } from "../repositories/UserRepository";

export default {
  async createUser(request: Request, response: Response) {
    const { name, email, password } = request.body;

    const createUser = new CreateUserService(new UserRepository());

    const user = await createUser.execute(name, email, password);

    return response.json({ user });
  }
}