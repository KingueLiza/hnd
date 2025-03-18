import { int, integer, sqliteTable, varchar, text } from "drizzle-orm/sqlite-core";


export const GRADES = sqliteTable('grades', {
    id: integer('id').primaryKey(),
    grade: text('grade').notNull()
})
export const STUDENTS=sqliteTable('students',{
    id:int('id').autoincrement().primaryKey(),
    name:varchar('name',{length:20}).notNull(),
    grade:varchar('grade',{length:10}).notNull(),
    address:varchar('address',{length:50}),
    contact:varchar('contact',{length:11}),


})

