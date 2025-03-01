// pages/api/users.js
import mysql from 'mysql2/promise';

export default async function handler(req, res) {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
    });

    const [rows] = await connection.execute('SELECT * FROM users');
    connection.end();
    res.status(200).json(rows);
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ error: 'Database error' });
  }
}
// ```

// **2. Client-Side Data Fetching:**

// Fetch Data from API Routes:**
// * In your Next.js components, use `fetch` or a library like `axios` to make requests to your API routes.
// * Display the retrieved data in your components.
// * **Example:**

'javascript'
// pages/index.js
import { useState, useEffect } from 'react';

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch('/api/users');
      const data = await response.json();
      setUsers(data);
    }
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}


// **3. ORMs (Optional):**

// * **Prisma or Sequelize:**
// * Object-Relational Mappers (ORMs) like Prisma and Sequelize simplify database interactions.
// * They provide an abstraction layer, allowing you to work with database tables using JavaScript objects.
// * Using an ORM can greatly increase development speed, and also help prevent SQL injection.
// * **Benefits:**
// * Improved developer experience.
// * Type safety.
// * Simplified database migrations.

// **Key Considerations:**

// * **Security:**
// * Never expose database credentials in client-side code.
// * Sanitize user inputs to prevent SQL injection.
// * **Performance:**
// * Optimize your SQL queries.
// * Use connection pooling to manage database connections efficiently.
// * **Error Handling:**
// * Implement robust error handling in your API routes.
// * Provide informative error messages to the client.

