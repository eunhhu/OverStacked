import Elysia from "elysia";
import { swagger } from "@elysiajs/swagger";
import cors from "@elysiajs/cors";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

prisma.$connect().then(() => {
  console.log('Connected to database');
}).catch((e: Error) => {
  console.error('Failed to connect to database', e);
});

const PORT = process.env.PORT || 8000;

const app = new Elysia()
  .use(cors({
    origin: process.env.ALLOWED_ORIGINS?.split(",") || ["http://localhost:3000", `http://localhost:${PORT}`],
    credentials: true,
  }))
  .use(swagger({
    path: "/swagger"
  }))
  .listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));

export default app;