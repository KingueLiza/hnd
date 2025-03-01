import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
  host: "tracking",
  user: "lizakingue",
  database: "attendance_tracking",
  password:'LiZa07',
  port:''

});

const db = drizzle({ client: connection });
