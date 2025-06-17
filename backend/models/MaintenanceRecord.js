import mongoose from "mongoose";

const MaintenanceRecordSchema = new mongoose.Schema({
    droneId: { type: String, required: true },
    issueDescription: { type: String, required: true },
    maintenanceDate: { type: Date, required: true },
    technicianName: { type: String, required: true },
    status: { type: String, enum: ["Pending", "In Progress", "Completed"], required: true }
}, { timestamps: true });

export default mongoose.model("MaintenanceRecord", MaintenanceRecordSchema);