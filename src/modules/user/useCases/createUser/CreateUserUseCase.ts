import { IUserRepository } from "../../repositories/implementations/IUserRepository";
import { UserDTO } from "../../types/User";

class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  execute({ name, email, password }: Omit<UserDTO, "id">) {
    const userAldreadyExists = this.userRepository.findUser(email);

    if (!!userAldreadyExists) {
      throw new Error("User already exists");
    }

    this.userRepository.create({ name, email, password });
    this.userRepository.save();

    return;
  }
}

export { CreateUserUseCase };
