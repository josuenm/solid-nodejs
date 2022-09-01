import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): void {
    const { name, email, password } = request.body;

    try {
      this.createUserUseCase.execute({ name, email, password });

      response.status(201).send();
    } catch (error) {
      console.log(error);
    }
  }
}

export { CreateUserController };
