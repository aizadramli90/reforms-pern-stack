import { pool } from "../database/connection.js";

export async function uploadImage(req, res) {
    try {
        const file = req.file;
        const request_id = req.body.request_id;
        console.log(file);

        
        //insert uploaded file to database
        const query = `
            INSERT INTO file (request_id, fieldname, originalname, encoding,mimetype, destination, filename, path, size)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *
        `;

        const dbRes = await pool.query(query, [
            request_id,
            file.fieldname,
            file.originalname,
            file.encoding,
            file.mimetype,
            file.destination,
            file.filename,
            file.path,
            file.size
        ]);

        const data = dbRes.rows[0];

        res.status(200).json({
            message: "Image uploaded successfully",
            file: data,
        });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Internal server error",
        });
    }

} 