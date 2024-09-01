import { pool } from "../database/connection.js";

//create requestForMaintenance table
// has request_id, user_id, department, title, description, status, created_at, updated_at, user_id (foreign key)


const query = `
    CREATE TABLE IF NOT EXISTS request (
        request_id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(user_id),
        department VARCHAR(50) NOT NULL,
        maintenance_type VARCHAR(50) NOT NULL,
        issued_to VARCHAR(50) NOT NULL,
        title VARCHAR(50) NOT NULL,
        description TEXT NOT NULL,
        status VARCHAR(50) DEFAULT 'pending',
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
);
`

async function createRequestTable() {
    try {
        await pool.query(query);
        console.log("Request table created");
    } catch (error) {
        console.error("Request table creation failed");
    }
};

export default createRequestTable;