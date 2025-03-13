import { db, schema } from './index';
import { eq } from 'drizzle-orm';
import { v4 as uuidv4 } from 'uuid';

// User utilities
export async function createUser({ name, email }) {
  const id = uuidv4();
  await db.insert(schema.users).values({ id, name, email });
  return { id, name, email };
}

export async function getUserById(id) {
  const [user] = await db.select().from(schema.users).where(eq(schema.users.id, id));
  return user;
}

export async function getUserByEmail(email) {
  const [user] = await db.select().from(schema.users).where(eq(schema.users.email, email));
  return user;
}

// Item utilities
export async function createItem({ name, description, userId }) {
  const id = uuidv4();
  await db.insert(schema.items).values({ id, name, description, userId });
  return { id, name, description, userId };
}

export async function getItemById(id) {
  const [item] = await db.select().from(schema.items).where(eq(schema.items.id, id));
  return item;
}

export async function getItemsByUserId(userId) {
  return await db.select().from(schema.items).where(eq(schema.items.userId, userId));
}

// Trade utilities
export async function createTrade({ itemOfferedId, itemRequestedId }) {
  const id = uuidv4();
  await db.insert(schema.trades).values({ id, itemOfferedId, itemRequestedId });
  return { id, itemOfferedId, itemRequestedId, status: 'pending' };
}

export async function updateTradeStatus(id, status) {
  await db.update(schema.trades)
    .set({ status })
    .where(eq(schema.trades.id, id));
  
  const [trade] = await db.select().from(schema.trades).where(eq(schema.trades.id, id));
  return trade;
}

export async function getTradeById(id) {
  const [trade] = await db.select().from(schema.trades).where(eq(schema.trades.id, id));
  return trade;
} 