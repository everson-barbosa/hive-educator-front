import { z } from "zod"

export const userPayloadSchema = z.object({
  sub: z.string(),
  name: z.string(),
  email: z.string()
})

export type UserPayloadSchema = z.infer<typeof userPayloadSchema>