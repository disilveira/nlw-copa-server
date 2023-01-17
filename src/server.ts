import Fastify from "fastify";
import cors from "@fastify/cors";
import { PrismaClient } from "@prisma/client";

const app = Fastify();
const prisma = new PrismaClient();

app.register(cors, {
  origin: "http://localhost:3333",
});

app.get("/", async () => {
  const habits = await prisma.habit.findMany();
  return habits;
});

app
  .listen({
    port: 3333,
  })
  .then((address) => console.log(`server listening on ${address}`))
  .catch((err) => {
    console.log("Error starting server:", err);
  });
