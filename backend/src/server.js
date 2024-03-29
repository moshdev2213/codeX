import Express from "express";
const app = Express();
import dotenv from "dotenv"
dotenv.config();

import cors from "cors";
import db from "./db.js"
import corsConfig from "./Config/CorsConfig.js"

const PORT = process.env.PORT || 3500

app.use(cors(corsConfig));
app.use(Express.json());

// import routes
import AuthRoute from './Routes/AuthRoute.js'
import EmpRoute from './Routes/EmpRoute.js'
import BugRoute from './Routes/BugRoute.js'

// routes definition starts here
app.get("/", (req, res) => {
    return response(res,200,"Server Online")
})
app.use('/api/v1/auth', AuthRoute)
app.use('/api/v1/employee',EmpRoute)
app.use('/api/v1/bug',BugRoute)

//db connction
db();

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
})