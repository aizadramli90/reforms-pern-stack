import { pool } from "../../database/connection.js";

const deleteQuery = `
    DELETE FROM users WHERE user_id = $1
`

const readQuery = `SELECT * FROM users WHERE user_id = $1`;

async function deleteUser(req,res) {
    try {

        const id = req.params.id;

        //check if user exists
        const checkUser = await pool.query(readQuery, [id]);
        const userExist = checkUser.rowCount;
        if (userExist === 0) {
            return res.status(404).json({
                message: "User not found"
            });
        };

        await pool.query(deleteQuery, [id]);
        res.status(200).json({
            message: "User deleted successfully"
        });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Internal server error"
        });
    }
};

export default deleteUser;