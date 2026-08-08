import Fastify from "fastify";
import {translationRoutes} from "./routes/translationRoutes";


/**
 *
 */
export function buildApp() {
  const app = Fastify({
    logger: true,
  });

  app.get("/health", async () => {
    return {
      status: "ok",
    };
  });
  app.register(translationRoutes)
  return app;
}
