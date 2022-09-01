import { Request, Response } from "express";
import { LoginUserUseCase } from "./LoginUserUseCase";

class LoginUserController {
  constructor(private loginUserUseCase: LoginUserUseCase) {}

  handle(request: Request, response: Response): void {
    const { email, password } = request.body;

    this.loginUserUseCase.execute({ email, password });

    response.status(201).send();
  }
}

export { LoginUserController };
