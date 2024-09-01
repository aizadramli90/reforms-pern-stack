//import all the required modules
// import 'dotenv/config'
import express from "express";
import healthController from "./controller/health.js";
import { databaseInit } from "./database/connection.js";
import createUser from "./controller/user.controller/create.js";
import { readAllUsers, readUserById } from "./controller/user.controller/read.js";
// import updateUser from "./controller/user.controller/update.js";
import deleteUser from "./controller/user.controller/delete.js";
import createRequest from "./controller/request.controller/create.js";
import deleteRequest from "./controller/request.controller/delete.js";
import listAllRequestForSpecificId from "./controller/request.controller/read.js";
import createToken from "./controller/auth.js";
import isAuth from "./middleware/isAuth.js";
/* import { uploadImage } from "./controller/upload.js";
import upload from "./middleware/multerUpload.js"; */
import path from "path";
import { fileURLToPath } from 'url';
import cors from "cors";



// Define __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);




//declare the express app and port
const app = express();
const PORT = process.env.PORT;

// cors
app.use(cors(
    {
        origin: process.env.FRONTEND_URL,
        credentials: true
    }
));


//parsing
app.use(express.json());
app.use(express.urlencoded({extended: true}));




//database connection and initialization
databaseInit();





//routes
app.get("/health", healthController.get);
app.post("/health", healthController.post);
app.get("/admin/users", isAuth, readAllUsers);
app.delete("/users/:id", deleteUser)

app.post("/register", createUser);
app.post("/login", createToken)

//route to handle requests
app.post("/requests", isAuth, createRequest);
app.get("/requests", isAuth, listAllRequestForSpecificId);

//delete request
app.delete("/request/:id", isAuth, deleteRequest);


//serve static files from the ../frontend/public folder
app.use(express.static(path.join(__dirname, '/client/reforms_web_app_react/dist')));

//render client for any path
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/reforms_web_app_react/dist', 'index.html'));
})




/* app.get('/', (req, res) => res.send('Hello World!')) */


app.listen(PORT, () => console.log(`Server is running on port ${PORT}!`))