import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./utils/database.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";
import cors from "cors";

// Load environment variables from .env file
dotenv.config({
    path: "./.env"
});

// Connect to the database
databaseConnection();

const app = express();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

const corsOptions = {
    origin: 'http://localhost:5174',
    credentials: true
};
app.use(cors(corsOptions));

// API routes
app.use("/api/v1/user", userRoute);

// Use port from environment variable or default to 3000
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(Server is running on port ${port});
});
