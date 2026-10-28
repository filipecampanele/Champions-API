import dotenv from "dotenv";
import createApp from "./app";

dotenv.config();

const app = createApp();
const port = process.env.PORT ?? 3333;

app.listen(port, () => {
  console.log(`🚀 Servidor iniciado em http://localhost:${port}/api`);
});
