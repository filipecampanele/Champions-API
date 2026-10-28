import express from "express";
import cors from "cors";
import router from "./routes/routes";

function createApp() {
  const app = express();

  app.use(express.json());
  app.use(cors({ origin: "*" })); // Implementando CORS
  app.use("/api", router);

  return app;
}

export default createApp;
