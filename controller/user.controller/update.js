import { pool } from "../../database/connection.js";

const updateQuery = `
    UPDATE users SET username = $1, email = $2 WHERE user_id = $3;
`

const readQuery = `SELECT * FROM users WHERE user_id = $1`;

async function updateUser(req, res) {
    try {
        const id = req.params.id;
        const username = req.body.username;
        const email = req.body.email;
        

        //check if user exists
        const checkUser = await pool.query(readQuery, [id]);
        const userExist = checkUser.rowCount;
        if (userExist === 0) {
            return res.status(404).json({
                message: "User not found"
            });
        };
        

        //validation
        if (!username || !email) {
            return res.status(400).json({ message: "Username and email are required" });
        };



        //check if email is valid
        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: "Please enter a valid email" });
        };

        await pool.query(updateQuery, [username, email, id]);
        res.status(200).json({
            message: "User updated successfully",
        });

    

    } catch (error) {
        console.error(error);
        res.status(500).json({ 
            message: "Internal server error"
         });
    }
};

export default updateUser;