import pkg from "pg";
import "dotenv/config";
import createUsersTable from "../model/user.js";
import createRequestTable from "../model/request.js";
import createFileTable from "../model/file.js";



const { Pool } = pkg;




export const pool = new Pool({
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    port: process.env.PGPORT || 5432,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000,
    // ssl: { rejectUnauthorized: false }
});


export async function databaseInit() {
    try {
        const dbRes = await pool.query("SELECT NOW()");
        const dbName = await pool.query("SELECT current_database()");
        const time = dbRes.rows[0].now;
        const name = dbName.rows[0].current_database;
        console.log(`Database connected at ${time} on ${name}`);
        //create users table
        await createUsersTable();
        await createRequestTable();
        await createFileTable();

    } catch (error) {
        console.error("Database connection failed");
        console.log(`Host:${process.env.PGHOST}, User: ${process.env.PGUSER}, Password: ${process.env.PGPASSWORD}, Database: ${process.env.PGDATABASE}, Port: ${process.env.PGPORT}.`);
    }
}