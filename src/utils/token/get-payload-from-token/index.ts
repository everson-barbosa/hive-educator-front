import { jwtDecode } from "jwt-decode";
import { z } from "zod";

export function getPayloadFromToken<T>(token: string, schema: z.ZodSchema<T>): T | null {
  try {
    const payload = jwtDecode(token);
    const result = schema.parse(payload);

    return result
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("Error on try to validate payload:", error.errors);
    } else {
      console.error("Error on try to decode token:", error);
    }

    return null
  }
}