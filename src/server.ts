import express from "express";
import { connectToMongoDB } from "./databases/mongo";
import { connectToPostgreSQL } from "./databases/postgre";
import { router as Routes } from "./routes";

const port = 8080;

const app = express();

app.use(express.json());

connectToMongoDB();
connectToPostgreSQL();

app.use("/api", Routes);

app.listen(port, () => console.log(`Server is running on port ${port}`));
