import { User } from "@prisma/client";

export interface IUserAuthenticate {
  auth(email: string, password: string): Promise<User>;
}