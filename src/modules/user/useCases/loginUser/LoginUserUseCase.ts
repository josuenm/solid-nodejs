import { IUserRepository } from "../../repositories/implementations/IUserRepository";
import { UserDTO } from "../../types/User";

class LoginUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  execute({ email, password }: Omit<UserDTO, "id" | "name">) {}
}

export { LoginUserUseCase };
