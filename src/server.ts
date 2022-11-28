import "reflect-metadata";
import express from "express";
import swaggerUi from "swagger-ui-express";
import { createConnection } from "typeorm";

import { router } from "./routes";
import swaggerFile from "./swagger.json";

import "./database";

const app = express();

createConnection().then(() => console.log("connected to database"));

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(router);

app.listen(3333, () => console.log("Server is running!"));
