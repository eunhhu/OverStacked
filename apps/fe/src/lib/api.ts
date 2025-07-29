import { treaty } from "@elysiajs/eden";
import type app from "../../../be/src/index";

const url = import.meta.env.VITE_API_URL || "http://localhost:8000";

export const api = treaty<typeof app>(url);