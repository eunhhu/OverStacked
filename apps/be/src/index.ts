import Elysia from "elysia";
import { swagger } from "@elysiajs/swagger";
import cors from "@elysiajs/cors";
import { PrismaClient } from "@prisma/client";
import cookie from "@elysiajs/cookie";

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
    path: "/swagger"
  }))
  .use(cookie({
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7
  }))
  // Routes
  .get("/", ({redirect}) => redirect("/health"))
  .get("/health", () => "OK")
  // Error handling
  .onError(({ error, set }) => {
    console.error(error);
    set.status = 500;
    return "Internal Server Error";
  })
  // Start server
  .listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));

export default app;