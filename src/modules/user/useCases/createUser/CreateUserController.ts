import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<void> {
    const { name, email, password } = request.body;

    try {
      await this.createUserUseCase.execute({ name, email, password });
      response.status(201).send();
    } catch (error: any) {
      switch (error.message) {
        case "User already exists":
          response.status(401).json({ error: error.message });
          break;

        default:
          response.status(500).json({ error: "Error server" });
          break;
      }
    }
  }
}

export { CreateUserController };
