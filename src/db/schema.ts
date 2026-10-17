import { pgTable, timestamp, varchar, jsonb, boolean, integer, uuid } from 'drizzle-orm/pg-core';
import { RoleKey } from '@/types/domain';

export const users = pgTable('users', {
  id: uuid('id').defaultRandom().primaryKey(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  name: varchar('name', { length: 255 }).notNull(),
  role: varchar('role', { length: 50 }).$type<RoleKey>().notNull().default('customer'),
  passwordHash: varchar('password_hash', { length: 255 }),
  mfaEnabled: boolean('mfa_enabled').default(false),
  mfaSecret: varchar('mfa_secret', { length: 255 }),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const products = pgTable('products', {
  id: varchar('id', { length: 100 }).primaryKey(),
  documentId: varchar('document_id', { length: 100 }).notNull(),
  legacyId: integer('legacy_id'),
  productCode: varchar('product_code', { length: 50 }).notNull().unique(),
  slug: varchar('slug', { length: 255 }).notNull().unique(),
  brand: varchar('brand', { length: 100 }).notNull(),
  family: varchar('family', { length: 50 }).notNull(),
  lifecycleStatus: varchar('lifecycle_status', { length: 50 }).notNull(),
  localized: jsonb('localized').notNull(),
  specs: jsonb('specs').notNull(),
  variants: jsonb('variants').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const crmAccounts = pgTable('crm_accounts', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  type: varchar('type', { length: 100 }).notNull(), // clinic, laboratory, distributor
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const crmLeads = pgTable('crm_leads', {
  id: uuid('id').defaultRandom().primaryKey(),
  accountId: uuid('account_id').references(() => crmAccounts.id),
  contactName: varchar('contact_name', { length: 255 }).notNull(),
  contactEmail: varchar('contact_email', { length: 255 }),
  contactPhone: varchar('contact_phone', { length: 50 }),
  status: varchar('status', { length: 50 }).notNull().default('new'), // new, working, qualified, disqualified, converted
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const crmOpportunities = pgTable('crm_opportunities', {
  id: uuid('id').defaultRandom().primaryKey(),
  accountId: uuid('account_id').references(() => crmAccounts.id),
  leadId: uuid('lead_id').references(() => crmLeads.id),
  title: varchar('title', { length: 255 }).notNull(),
  stage: varchar('stage', { length: 100 }).notNull(), // lead, proposal, negotiation, won, lost
  amount: integer('amount'),
  currency: varchar('currency', { length: 10 }).default('IRR'),
  probability: integer('probability').default(0),
  expectedCloseDate: timestamp('expected_close_date'),
  ownerId: uuid('owner_id').references(() => users.id),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const crmTickets = pgTable('crm_cases', {
  id: uuid('id').defaultRandom().primaryKey(),
  requesterId: uuid('requester_id').references(() => users.id),
  accountId: uuid('account_id').references(() => crmAccounts.id),
  subject: varchar('subject', { length: 255 }).notNull(),
  status: varchar('status', { length: 50 }).notNull().default('received'),
  priority: varchar('priority', { length: 50 }).notNull().default('normal'),
  kind: varchar('kind', { length: 50 }).notNull().default('support_ticket'), // support_ticket, quality_complaint
  createdAt: timestamp('created_at').defaultNow().notNull(),
});
