import { IUserAuthenticate } from "../interfaces/IUserAuthenticate";

class AuthService {
  constructor(
    private userAuthenticate: IUserAuthenticate
  ) { }

  public async execute(email: string, password: string) {
    const user = await this.userAuthenticate.auth(email, password);
    return user;
  }
}

export { AuthService }