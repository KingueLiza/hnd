import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const GRADES = sqliteTable('grades', {
    id: integer('id').primaryKey(),
    grade: text('grade').notNull()
});