import { User } from "@prisma/client";

export interface IUserCreate {
  create(name: string, email: string, password: string): Promise<User>;
}