import axios from "axios";
import { env } from "./env";

export const httpDriver = axios.create({
  baseURL: env.API_BASE_URL,
});
