import express, {
  json,
  urlencoded,
  Request as ExRequest,
  Response as ExResponse,
} from "express";
import { RegisterRoutes } from "./routes";
import swaggerUi from "swagger-ui-express";

export const app = express();

app.use(
  urlencoded({
    extended: true,
  })
);
app.use(json());

app.use("/docs", swaggerUi.serve, async (_req: ExRequest, res: ExResponse) => {
  const swaggerDocument = await import("./swagger.json");
  res.send(swaggerUi.generateHTML(swaggerDocument));
});

RegisterRoutes(app);

app.use((req, res, next) => {
  res.status(404).send({ status: "not found" });
});
