import { z } from 'zod';

/**
 * Server-only environment variables schema.
 * NEVER expose these variables to the browser client bundle.
 */
export const serverEnvSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  DATABASE_URL: z.string().url('DATABASE_URL must be a valid PostgreSQL connection URL').optional(),
  RESEND_API_KEY: z.string().min(1, 'RESEND_API_KEY cannot be empty').optional(),
  RESEND_FROM_EMAIL: z.string().min(1, 'RESEND_FROM_EMAIL cannot be empty').optional(),
  UPSTASH_REDIS_REST_URL: z
    .string()
    .url('UPSTASH_REDIS_REST_URL must be a valid HTTPS URL')
    .optional(),
  UPSTASH_REDIS_REST_TOKEN: z
    .string()
    .min(1, 'UPSTASH_REDIS_REST_TOKEN cannot be empty')
    .optional(),
});

/**
 * Client-accessible environment variables schema.
 * All client variables MUST be prefixed with NEXT_PUBLIC_.
 */
export const clientEnvSchema = z.object({
  NEXT_PUBLIC_APP_URL: z
    .string()
    .url('NEXT_PUBLIC_APP_URL must be a valid URL')
    .default('http://localhost:3000'),
  NEXT_PUBLIC_POSTHOG_KEY: z.string().optional(),
  NEXT_PUBLIC_POSTHOG_HOST: z
    .string()
    .url('NEXT_PUBLIC_POSTHOG_HOST must be a valid URL')
    .optional(),
});

export const combinedEnvSchema = serverEnvSchema.merge(clientEnvSchema);

export type ServerEnv = z.infer<typeof serverEnvSchema>;
export type ClientEnv = z.infer<typeof clientEnvSchema>;
export type Env = z.infer<typeof combinedEnvSchema>;

/**
 * Parses and validates environment variables.
 * Fails fast with human-readable error formatting if validation fails.
 */
export function parseEnv(rawEnv: Record<string, string | undefined> = process.env): Env {
  const parsed = combinedEnvSchema.safeParse(rawEnv);

  if (!parsed.success) {
    const formattedErrors = Object.entries(parsed.error.flatten().fieldErrors)
      .map(([field, errors]) => `  - ${field}: ${errors?.join(', ')}`)
      .join('\n');

    const errorMessage = `\n❌ [Environment Error] Invalid or missing environment variables:\n${formattedErrors}\n\nPlease check your .env.local file or refer to .env.example.\n`;

    // In production builds or server runtime, fail fast
    const isProduction =
      rawEnv['NODE_ENV'] === 'production' || process.env['NODE_ENV'] === 'production';
    if (isProduction) {
      throw new Error(errorMessage);
    } else {
      console.warn(errorMessage);
    }

    return rawEnv as unknown as Env;
  }

  return parsed.data;
}

/**
 * Validated application environment configuration singleton.
 */
export const env = parseEnv();
