import express from "express";
import { connectToDatabase } from "./databases/mongo";
import { router as Routes } from "./routes";

const port = 8080;

const app = express();

app.use(express.json());

connectToDatabase();

app.use("/api", Routes);

app.listen(port, () => console.log(`Server is running on port ${port}`));
