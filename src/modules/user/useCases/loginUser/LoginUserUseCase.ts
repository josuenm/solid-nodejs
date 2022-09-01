import { UserDTO } from "../../types/User";

class LoginUserUseCase {
  execute({ email, password }: Omit<UserDTO, "name">) {}
}

export { LoginUserUseCase };
