import axios from "axios";
import i18n from "../utils/i18n";
export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});
