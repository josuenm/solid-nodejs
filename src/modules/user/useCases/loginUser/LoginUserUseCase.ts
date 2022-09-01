import { IUserRepository } from "../../repositories/implementations/IUserRepository";
import { UserDTO } from "../../types/User";

class LoginUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute({ email, password }: Omit<UserDTO, "id" | "name">) {
    const findUser = await this.userRepository.findUser(email);

    if (findUser === "User not found") {
      throw new Error("User not found");
    }

    const isPasswordCorrect = this.userRepository.login(password);

    if (!isPasswordCorrect) {
      throw new Error("Password did not match");
    }
  }
}

export { LoginUserUseCase };
