import express from "express";
import { createUserController } from "../modules/user/useCases/createUser";

const userRoute = express.Router();

userRoute.post("/create", (req, res) => {
  return createUserController.handle(req, res);
});

export { userRoute };
