import { defineConfig } from 'drizzle-kit';
import * as dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  schema: './src/db/schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_MIGRATION_URL || 'postgresql://idealmakoo_migrator:CHANGE_ME@127.0.0.1:5432/idealmakoo_db',
  },
  verbose: true,
  strict: true,
});
