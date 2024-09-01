import { pool } from "../database/connection.js";

//CREATE UPLOADED FILE TABLE WHICH RELATED TO REQUEST SPECIFIC REQUEST
const query = `
CREATE TABLE IF NOT EXISTS file (
    file_id SERIAL PRIMARY KEY,
    request_id INTEGER REFERENCES request(request_id),
    fieldname VARCHAR(255),
    originalname VARCHAR(255),
    encoding VARCHAR(255),
    mimetype VARCHAR(255),
    destination VARCHAR(255),
    filename VARCHAR(255),
    path TEXT,
    size INTEGER

)`;

async function createFileTable() {
    try {
        await pool.query(query);
        console.log("File table is created");
    } catch (error) {
        console.error(error);
    }
};

export default createFileTable;