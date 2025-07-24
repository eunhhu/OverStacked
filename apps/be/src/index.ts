import Elysia from "elysia";
import { swagger } from "@elysiajs/swagger";
import cors from "@elysiajs/cors";
import { PrismaClient } from "@prisma/client";
import cookie from "@elysiajs/cookie";
import { authPlugin, authRoutes } from "@overstacked/auth";
import { Api } from "@overstacked/shared";

const prisma = new PrismaClient();

prisma.$connect().then(() => {
  console.log('Connected to database');
}).catch((e: Error) => {
  console.error('Failed to connect to database', e);
});

const PORT = process.env.PORT || 8000;

const app = new Elysia()
  // Plugins
  .use(cors({
    origin: process.env.ALLOWED_ORIGINS?.split(",") || ["http://localhost:3000", `http://localhost:${PORT}`],
    credentials: true,
  }))
  .use(swagger({
    path: "/swagger",
    documentation: {
      info: {
        title: "OverStacked Documentation",
        version: "1.0.0",
      },
      servers: [
        {
          url: `http://localhost:${PORT}`,
          description: "Local development server",
        },
      ],
    },
  }))
  .use(cookie())
  .use(authPlugin)
  // Routes
  .get("/", ({redirect}) => redirect("/health"))
  .get("/health", () => "OK")
  .group("/auth", (app) => authRoutes(app as any, { prisma }))
  // Error handling
  .onError(({ error, set }) => {
    console.error(error);
    set.status = 500;
    return Api.internalServerError(error);
  })
  // Start server
  .listen(PORT);

export default app;