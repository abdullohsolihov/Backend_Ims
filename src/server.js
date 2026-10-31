import express from "express";
import main from "./routers/index.js";
import { configDotenv } from "dotenv";
import errorHandler from "./middleware/errorHandler.js";

configDotenv();

const app = express();

app.use(express.json());
app.use(main);
app.use(errorHandler)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});