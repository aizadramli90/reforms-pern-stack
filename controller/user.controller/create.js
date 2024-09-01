import { pool } from "../../database/connection.js";
import bcrypt from "bcrypt";

const query = `
    INSERT INTO users (username, email, password, is_admin) 
    VALUES ($1, $2, $3, $4)
`

const emailQuery = `
    SELECT * FROM users WHERE email = $1
    `

async function createUser(req, res) {
    try {
        //bcrypt password
        const SALTROUNDS = 10;

        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;
        const is_admin = req.body.is_admin || false;

        //validation
        if (!username || !email || !password) {
            return res.status(400).json({ message: "Please fill all the required fields" });
        };

        
        
        //check if email is valid
        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: "Please enter a valid email" });
        };
        
        
        //check if user already exists
        const user = await pool.query(emailQuery, [email]);
        
        
        if (user.rows.length > 0) {
            return res.status(400).json({ message: "User already exists" });
        };
        
        //hash password
        const salt = bcrypt.genSaltSync(SALTROUNDS);
        const hashedPassword = bcrypt.hashSync(password, salt);


        const dbRes = await pool.query(query, [
            username, email, hashedPassword, is_admin
        ]);
        console.log("dbRes", dbRes);
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ 
            message: "Internal server error",
        });
    }
};

export default createUser;