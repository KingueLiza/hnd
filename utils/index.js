import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";

// Create a SQLite client
const client = createClient({
  // For local development, use a local SQLite file
  url: "file:./local.db",
});

// Initialize Drizzle with the SQLite client
const db = drizzle(client);

export { db };
