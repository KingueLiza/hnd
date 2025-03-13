import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import * as schema from './schema';
import { join } from 'path';

// Create a SQLite database file in the project directory
const sqlite = new Database(join(process.cwd(), 'sqlite.db'));

// Create a Drizzle instance with the SQLite database
export const db = drizzle(sqlite, { schema });

// Export the schema for use in other files
export { schema }; 