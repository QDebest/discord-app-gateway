import {FastifyInstance} from "fastify";
import {getTranslationHealth, translate} from "../clients/translationClient";

const PREFIX = "/translation";
interface TranslationRequest {
  text:string;
}
export async function translationRoutes(app: FastifyInstance): Promise<void> {
  app.get(`${PREFIX}/health`, async () => {
    return getTranslationHealth();
  });

  app.post<{Body: TranslationRequest}>(`${PREFIX}/translate`, async (request) => {
    return translate(request.body.text);
  })
}
