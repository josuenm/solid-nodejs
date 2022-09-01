import express from "express";
import { createUserController } from "../modules/user/useCases/createUser";
import { loginUserController } from "../modules/user/useCases/loginUser";

const userRoute = express.Router();

userRoute.post("/create", async (req, res) => {
  return await createUserController.handle(req, res);
});

userRoute.post("/login", async (req, res) => {
  return await loginUserController.handle(req, res);
});

export { userRoute };
