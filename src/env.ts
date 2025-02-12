import { z } from 'zod'

const envSchema = z.object({
  NEXT_PUBLIC_API_URL: z.string().url(),
  NEXT_PUBLIC_GITHUB_CLIENT_ID: z.string(),
})

export const env = envSchema.parse(process.env)
