import WebPush from "web-push";
import { FastifyInstance } from "fastify";
import { z } from "zod";

const publicKey =
  "BBjxJJ9VGVUo478XXUwhaxstEEZzdhF7_Zumkd13kSJs3JlGOi-0IJuNrZsZ75SHy9QCVsJwX1vSzoxFIZeFP0Q";
const privateKey = "EvJX2oSYdD0BvyKBZcb8K5k0rVGIaJ1zlfpvlLcsjbQ";

WebPush.setVapidDetails("http://localhost:3333", publicKey, privateKey);

export async function notificationRoutes(app: FastifyInstance) {
  app.get("/push/public_key", () => {
    return {
      publicKey,
    };
  });

  app.post("/push/register", (request, reply) => {
    //console.log(request);
    return reply.status(201).send();
  });

  app.post("/push/send", async (request, reply) => {
    const sendPushbody = z.object({
      subscription: z.object({
        endpoint: z.string(),
        keys: z.object({
          p256dh: z.string(),
          auth: z.string(),
        }),
      }),
    });

    const { subscription } = sendPushbody.parse(request.body);

    WebPush.sendNotification(subscription, "Hello do backend!!");

    return reply.status(201).send();
  });
}
