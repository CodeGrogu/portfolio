import { describe, expect, it } from 'bun:test';
import { clientEnvSchema, combinedEnvSchema, parseEnv, serverEnvSchema } from '../src/lib/env';

describe('Environment & Secrets Validation Strategy (CV-14)', () => {
  it('should parse valid default environment variables cleanly', () => {
    const validRaw = {
      NODE_ENV: 'development',
      NEXT_PUBLIC_APP_URL: 'http://localhost:3000',
    };

    const result = combinedEnvSchema.safeParse(validRaw);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.NODE_ENV).toBe('development');
      expect(result.data.NEXT_PUBLIC_APP_URL).toBe('http://localhost:3000');
    }
  });

  it('should apply default values when optional fields are omitted', () => {
    const emptyRaw = {};
    const result = combinedEnvSchema.safeParse(emptyRaw);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.NODE_ENV).toBe('development');
      expect(result.data.NEXT_PUBLIC_APP_URL).toBe('http://localhost:3000');
      expect(result.data.DATABASE_URL).toBeUndefined();
    }
  });

  it('should parse full production secrets when supplied', () => {
    const fullProdRaw = {
      NODE_ENV: 'production',
      NEXT_PUBLIC_APP_URL: 'https://codegrogu.com',
      DATABASE_URL: 'postgresql://neondb_owner:secret@ep-neon.us-east-2.aws.neon.tech/neondb',
      RESEND_API_KEY: 're_1234567890',
      RESEND_FROM_EMAIL: 'CodeGrogu <noreply@codegrogu.com>',
      UPSTASH_REDIS_REST_URL: 'https://upstash.io',
      UPSTASH_REDIS_REST_TOKEN: 'token123',
      NEXT_PUBLIC_POSTHOG_KEY: 'phc_12345',
      NEXT_PUBLIC_POSTHOG_HOST: 'https://us.i.posthog.com',
    };

    const result = combinedEnvSchema.safeParse(fullProdRaw);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.DATABASE_URL).toContain('postgresql://');
      expect(result.data.RESEND_API_KEY).toBe('re_1234567890');
    }
  });

  it('should fail when an invalid URL is provided for NEXT_PUBLIC_APP_URL', () => {
    const invalidRaw = {
      NEXT_PUBLIC_APP_URL: 'not-a-valid-url',
    };

    const result = clientEnvSchema.safeParse(invalidRaw);
    expect(result.success).toBe(false);
  });

  it('should fail when an invalid URL is provided for DATABASE_URL', () => {
    const invalidRaw = {
      DATABASE_URL: 'invalid-postgres-string',
    };

    const result = serverEnvSchema.safeParse(invalidRaw);
    expect(result.success).toBe(false);
  });

  it('should throw an error in production if validation fails via parseEnv()', () => {
    const invalidRaw = {
      NODE_ENV: 'production',
      NEXT_PUBLIC_APP_URL: 'invalid-url',
    };

    expect(() => {
      parseEnv(invalidRaw);
    }).toThrow();
  });
});
