import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import maintenanceRoutes from "./routes/maintenance.js";
import authRoutes from "./routes/auth.js"; // <-- Add this line

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/maintenance", maintenanceRoutes);
app.use("/api/auth", authRoutes); // <-- Add this line

const PORT = process.env.PORT || 5000;

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
    })
    .catch((err) => {
        console.error("MongoDB connection error:", err);
        process.exit(1);
    });