import { pgTable, integer, varchar } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

export const usersTable = pgTable('users', {
    id: integer('id').primaryKey().generatedAlwaysAsIdentity(),
    name: varchar('name', { length: 255 }).notNull(),
    age: integer('age').notNull(),
    email: varchar('email', { length: 255 }).notNull().unique(),
    credits: integer('credits').notNull().default(0),
    createdAt: integer('createdAt').notNull().default(sql`extract(epoch from now())::int`),
    
});