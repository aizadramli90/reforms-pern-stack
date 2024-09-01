import { pool } from "../database/connection.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const createToken = async (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;

        //validate email and password
        if (!email || !password) {
            return res.status(400).json({
                message: "Bad request",
            });
        }

        //check email is exist in database
        const readQuery = `
            SELECT * FROM users WHERE email = $1
        `;

        const dbRes = await pool.query(readQuery, [email]);
        const user = dbRes.rows[0];
        console.log(user);
        if (!user) {
            return res.status(404).json({
                message: "User not found",
            });
        };

        //check hashedPassword is correct or not
        const isValidPassword = bcrypt.compareSync(password, user.password);
        //console.log(isValidPassword);

        //if password is not correct
        if (!isValidPassword) {
            return res.status(401).json({
                message: "Unauthorized",
            });
        };

        //create token using jwt
        const data = {
            email: user.email,
            user_id: user.user_id,
            is_admin: user.is_admin,
        };

        const secretKey = process.env.JWT_SECRET;
        const token = jwt.sign(data, secretKey);

        res.status(200).json({
            message: "Token created",
            token,
                });

    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
        });
    }
};

export default createToken;