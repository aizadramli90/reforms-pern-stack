import { pool } from "../database/connection.js";

//create users table
// has user_id, username, email, password, created_at, updated_at, is_admin
    const query = `
        CREATE TABLE IF NOT EXISTS users (
            user_id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(50) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP DEFAULT NOW(),
            updated_at TIMESTAMP DEFAULT NOW(),
            is_admin BOOLEAN DEFAULT FALSE
);
`

async function createUsersTable() {
    try {
        const res = await pool.query(query);
        console.log("Users table created");
    } catch (error) {
        console.error("Users table creation failed");
    }
};

export default createUsersTable;