import { HttpResponse } from "../models/http-response-model";

export const ok = async (data: unknown): Promise<HttpResponse> => ({
  statusCode: 200,
  body: data,
});

export const created = async (): Promise<HttpResponse> => ({
  statusCode: 201,
  body: { message: "Created" },
});

export const noContent = async (): Promise<HttpResponse> => ({
  statusCode: 204,
  body: null,
});

export const badRequest = async (): Promise<HttpResponse> => ({
  statusCode: 400,
  body: { message: "Bad Request" },
});

export const notFound = async (): Promise<HttpResponse> => ({
  statusCode: 404,
  body: { message: "Not Found" },
});
