---
name: fullstack-systems
description: >-
  Architect, build, and test full-stack systems for the CodeGrogu Portfolio: Neon PostgreSQL, Drizzle ORM,
  Zod schemas, booking engine APIs, transaction lifecycles, concurrency safety, abuse rate limiting, and Resend notifications.
---

# Full-Stack Systems & Booking Engine Skill

This skill governs backend database architecture, relational modeling, serverless data access, and booking engine workflows for the **CodeGrogu Portfolio**, verified against official Drizzle ORM and Neon PostgreSQL documentation.

---

## Core Stack & Verified Dependencies

| Layer             | Technology          | Official Driver / Library            | Verified Pattern                                                                                      |
| :---------------- | :------------------ | :----------------------------------- | :---------------------------------------------------------------------------------------------------- |
| **Database**      | Neon PostgreSQL     | `@neondatabase/serverless`           | Serverless connection pooling over HTTP/WebSockets                                                    |
| **ORM**           | Drizzle ORM         | `drizzle-orm` & `drizzle-kit`        | `drizzle-orm/neon-http` for stateless Edge/API routes; `neon-serverless` for interactive transactions |
| **Validation**    | Zod                 | `zod`                                | Runtime schema validation, input sanitization, type inference                                         |
| **Rate Limiting** | Sliding Window / KV | Upstash / in-memory tokens           | Public booking endpoint rate limiting (`CV-60`)                                                       |
| **Notifications** | Resend              | `resend` + `@react-email/components` | Async booking confirmations & secure cancellation magic links (`CV-62`)                               |

---

## Verified Implementation Patterns

### 1. Drizzle Client with Neon HTTP Driver (`CV-13`, `CV-51`)

For standard Next.js App Router Server Actions and API route handlers:

```typescript
// src/lib/db/index.ts
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not configured');
}

export const db = drizzle(process.env.DATABASE_URL, { schema });
```

### 2. Type-Safe Schema Definition with Drizzle pg-core

Audit timestamps, UUIDs, and relational definitions:

```typescript
// src/lib/db/schema.ts
import { pgTable, text, timestamp, uuid, varchar } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

export const services = pgTable('services', {
  id: varchar('id', { length: 100 }).primaryKey(),
  title: varchar('title', { length: 255 }).notNull(),
  description: text('description').notNull(),
  durationMinutes: text('duration_minutes').notNull(),
  priceCents: text('price_cents').notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
});

export const bookings = pgTable('bookings', {
  id: uuid('id').defaultRandom().primaryKey(),
  serviceId: varchar('service_id', { length: 100 })
    .references(() => services.id)
    .notNull(),
  clientName: varchar('client_name', { length: 255 }).notNull(),
  clientEmail: varchar('client_email', { length: 255 }).notNull(),
  clientNotes: text('client_notes'),
  scheduledAt: timestamp('scheduled_at', { withTimezone: true }).notNull(),
  status: varchar('status', { length: 50 }).default('confirmed').notNull(),
  cancelToken: text('cancel_token').notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
});

export const bookingsRelations = relations(bookings, ({ one }) => ({
  service: one(services, {
    fields: [bookings.serviceId],
    references: [services.id],
  }),
}));
```

### 3. Zod Input Validation & Schema Inference (`CV-59`)

```typescript
// src/lib/validations/booking.ts
import { z } from 'zod';

export const CreateBookingSchema = z.object({
  serviceId: z.string().min(1, 'Service selection is required'),
  clientName: z.string().min(2, 'Name must be at least 2 characters').max(100),
  clientEmail: z.string().email('Invalid email address'),
  clientNotes: z.string().max(1000).optional(),
  scheduledAt: z.string().datetime({ message: 'Invalid ISO date string' }),
});

export type CreateBookingInput = z.infer<typeof CreateBookingSchema>;
```

### 4. Atomic Slot Collision Prevention (`CV-58`, `CV-61`)

- Use database-level unique constraints on `(service_id, scheduled_at)` or conditional transactional insert queries to make double-booking mathematically impossible under concurrent requests.
- Enforce minimum advance lead time (e.g., $\ge 24\text{ hours}$) and operating window checks before writing to the database.

---

## Context7 API Lookup

When implementing full-stack features, verify current APIs via Context7:

- Drizzle ORM: `/drizzle-team/drizzle-orm` or `/drizzle-team/drizzle-orm-docs`
- Neon Serverless: `/neondatabase/serverless`
- Zod: `/colinhacks/zod`
