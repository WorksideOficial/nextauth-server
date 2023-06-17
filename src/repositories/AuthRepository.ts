import { User } from "@prisma/client";
import { IUserAuthenticate } from "../interfaces/IUserAuthenticate";
import prisma from "../database";
import jwt from "jsonwebtoken";
import { compare } from "bcrypt";

class AuthRepository implements IUserAuthenticate {
  public async auth(email: string, password: string): Promise<User> {
    const user = await prisma.user.findFirst({
      where: { email }
    });

    if (!user) {
      throw new Error("Error: usuário ou senha incorretos: Email");
    }

    const checkPassword = await compare(password, user.password);

    if (!checkPassword) {
      throw new Error("Error: usuário ou senha incorretos: Senha");
    }

    const token = jwt.sign({ id: user.id }, "secret", {
      expiresIn: '1d'
    });

    delete user?.password;
    const data = { ...user, token }
    return data;
  }
}

export { AuthRepository }