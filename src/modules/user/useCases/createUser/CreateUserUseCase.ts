import { IUserRepository } from "../../repositories/implementations/IUserRepository";
import { UserDTO } from "../../types/User";

class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute({ name, email, password }: Omit<UserDTO, "id">): Promise<void> {
    const userAldreadyExists = await this.userRepository.findUser(email);

    if (!!userAldreadyExists) {
      throw new Error("User already exists");
    }

    this.userRepository.create({ name, email, password });
    await this.userRepository.save();
  }
}

export { CreateUserUseCase };
