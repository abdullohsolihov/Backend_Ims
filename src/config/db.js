import { Pool } from "pg";
import { configDotenv } from "dotenv";
configDotenv()

const pool=new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST, //
    port: process.env.PG_PORT, // 
    database: process.env.DB_NAME, //
    password: process.env.DB_PASSWORD //
})

export default pool