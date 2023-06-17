import { IUserCreate } from "../interfaces/IUserCreate";

class CreateUserService {
  constructor(
    private userRepository: IUserCreate
  ) { }

  public async execute(name: string, email: string, password: string) {
    const user = await this.userRepository.create(name, email, password);
    return user;
  }
}

export { CreateUserService }