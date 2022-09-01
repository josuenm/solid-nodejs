import { UserRepository } from "../../repositories/UserRepository";
import { LoginUserController } from "./LoginUserController";
import { LoginUserUseCase } from "./LoginUserUseCase";

const userRepository = UserRepository.getInstance();

const loginUserUsecase = new LoginUserUseCase(userRepository);

const loginUserController = new LoginUserController(loginUserUsecase);

export { loginUserController };
