import { pool } from "../../database/connection.js";

const createRequest = async (req, res) => {
    try {
        const query = `
            INSERT INTO request (user_id, department, maintenance_type, issued_to, title, description)
            VALUES ($1, $2, $3, $4, $5, $6)
        `;

        //payload request
        const user_id = req.userId;
        const department = req.body.department;
        const maintenance_type = req.body.maintenance_type;
        const issued_to = req.body.issued_to;
        const title = req.body.title;
        const description = req.body.description;

        

        //validate empty fields
        if (!department || !maintenance_type || !issued_to || !title || !description) {
            return res.status(400).json({
                message: "Please fill all the required fields!"
            })
        };

        

        //insert to database
        await pool.query(query, [
            user_id, department, maintenance_type,issued_to, title, description
        ]);

        res.status(201).json({
            message: "Request created successfully"
        })
        
    } catch (error) {

        console.error(error);
        res.status(500).json({
            message: "Internal server error",
        })
        
    }
};
export default createRequest;