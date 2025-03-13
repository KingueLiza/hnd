import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

// Example schema for a user table
export const users = sqliteTable('users', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull().default(Date.now),
});

// Example schema for an items table
export const items = sqliteTable('items', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  description: text('description'),
  userId: text('user_id').notNull().references(() => users.id),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull().default(Date.now),
});

// Example schema for a trades table
export const trades = sqliteTable('trades', {
  id: text('id').primaryKey(),
  itemOfferedId: text('item_offered_id').notNull().references(() => items.id),
  itemRequestedId: text('item_requested_id').notNull().references(() => items.id),
  status: text('status').notNull().default('pending'),
  createdAt: integer('created_at', { mode: 'timestamp' }).notNull().default(Date.now),
}); 