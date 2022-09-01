import { Request, Response } from "express";
import { LoginUserUseCase } from "./LoginUserUseCase";

class LoginUserController {
  constructor(private loginUserUseCase: LoginUserUseCase) {}

  async handle(request: Request, response: Response): Promise<void> {
    const { email, password } = request.body;

    try {
      await this.loginUserUseCase.execute({ email, password });

      response.status(201).send();
    } catch (error: any) {
      switch (error.message) {
        case "User not found":
          response.status(401).json({ error: error.message });
          break;

        case "Password did not match":
          response.status(401).json({ error: error.message });
          break;

        default:
          response.status(500).json({ error: "Error server" });
          break;
      }
    }
  }
}

export { LoginUserController };
