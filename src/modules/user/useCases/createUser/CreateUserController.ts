import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): void {
    const { name, email, password } = request.body;

    try {
      this.createUserUseCase.execute({ name, email, password });
      response.status(201).send();
    } catch (error: any) {
      if (error.message === "User already exists") {
        response.status(409).json({ error: error.message });
      }
      response.status(500).json({ error: "Error server" });
    }
  }
}

export { CreateUserController };
