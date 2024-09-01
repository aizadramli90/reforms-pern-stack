import { pool } from "../../database/connection.js";

const deleteRequest = async (req, res) => {
    try {
    //payload request
    // req.userId = decoded.user_id;
    // req.userEmail = decoded.email;
    // req.is_admin = decoded.is_admin;
    const requestId = req.params.id;
    const user_id = req.userId;
    const query = `
        DELETE FROM request WHERE request_id = $1 AND user_id = $2
    `;
    //validate request_id
    if (!requestId) {
        return res.status(400).json({
            message: "Bad request"
        });
    };
    //delete request
    const db = await pool.query(query, [requestId, user_id]);
    if (db.rowCount === 0) {
        return res.status(404).json({
            message: "Request not found"
        });
    };
    res.status(200).json({
        message: "Request deleted successfully"
    });


    } catch (error) {
    console.error(error);
    res.status(500).json({
        message: "Internal server error"
    });
    }
};

export default deleteRequest;