import { UserRepository } from "../../repositories/UserRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const userRepository = UserRepository.getInstance();

const createUserUsecase = new CreateUserUseCase(userRepository);

const createUserController = new CreateUserController(createUserUsecase);

export { createUserController };
