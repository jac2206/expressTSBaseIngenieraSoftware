import express from "express";
import { scopePerRequest } from "awilix-express";
import { container } from "./config/container";
import healthRoutes from "./routes/health.routes";

export const createServer = () => {
  const app = express();

  app.use(express.json());

  app.use(scopePerRequest(container));

  app.use("/", healthRoutes);

  app.use((req, res) => {
    res.status(404).json({
      message: "Route not found",
      code: 404
    });
  });

  return app;
};
