import { migrate } from 'drizzle-orm/better-sqlite3/migrator';
import { db } from './index';

// This function will apply all migrations
export async function runMigrations() {
  console.log('Running migrations...');
  
  try {
    migrate(db, { migrationsFolder: './drizzle' });
    console.log('Migrations completed successfully');
  } catch (error) {
    console.error('Error running migrations:', error);
    throw error;
  }
}

// Run migrations if this file is executed directly
if (require.main === module) {
  runMigrations()
    .then(() => process.exit(0))
    .catch(() => process.exit(1));
} 