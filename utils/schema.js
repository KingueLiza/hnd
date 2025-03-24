import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";


export const GRADES = sqliteTable('grades', {
    id: integer('id').primaryKey(),
    grade: text('grade',{length:10}).notNull()
})
export const STUDENTS=sqliteTable('students',{
    id: integer('id').primaryKey({ autoIncrement: true }),
    name: text('name',{length:20}).notNull(),
    grade: text('grade',{length:10}).notNull(),
    address: text('address',{length:50}),
    contact: text('contact',{length:11}),
})

 export const ATTENANCE=sqliteTable('attendance',{
    id:integer('id').primaryKey({autoIncrement: true}),
    studentId:integer('studentId',{length:11}).notNull,
    present:text('present').default(false),
    day:integer('day',{length:11}).notNull(),//25
    date: text('date',{length:20}).notNull() //03//25

 

 });