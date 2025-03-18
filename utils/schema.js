import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";


export const GRADES = sqliteTable('grades', {
    id: integer('id').primaryKey(),
    grade: text('grade').notNull()
})
export const STUDENTS=sqliteTable('students',{
    id: integer('id').primaryKey({ autoIncrement: true }),
    name: text('name').notNull(),
    grade: text('grade').notNull(),
    address: text('address'),
    contact: text('contact'),
})

