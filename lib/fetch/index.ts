import { HttpRequest } from "./HttpRequest";

export const request = new HttpRequest({
  baseURL: "/api/v1",
  credentials: "include",
});
