import { buildApp } from "./app.js";

const app = buildApp();

app.listen({
  host: "0.0.0.0",
  port: 3000,
});
