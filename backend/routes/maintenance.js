import express from "express";
import MaintenanceRecord from "../models/MaintenanceRecord.js";

const router = express.Router();

// GET: Retrieve all maintenance records
router.get("/", async (req, res) => {
    try {
        const records = await MaintenanceRecord.find().sort({ maintenanceDate: -1 });
        res.json(records);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch records" });
    }
});

// POST: Insert a new maintenance record
router.post("/", async (req, res) => {
    try {
        const { droneId, issueDescription, maintenanceDate, technicianName, status } = req.body;
        if (!droneId || !issueDescription || !maintenanceDate || !technicianName || !status)
            return res.status(400).json({ error: "All fields are required" });
        const record = new MaintenanceRecord({ droneId, issueDescription, maintenanceDate, technicianName, status });
        await record.save();
        res.status(201).json(record);
    } catch (err) {
        res.status(500).json({ error: "Failed to create record" });
    }
});

// PUT: Update an existing record by ID
router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const updated = await MaintenanceRecord.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        if (!updated) return res.status(404).json({ error: "Record not found" });
        res.json(updated);
    } catch (err) {
        res.status(500).json({ error: "Failed to update record" });
    }
});

// DELETE: Remove a record by ID
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await MaintenanceRecord.findByIdAndDelete(id);
        if (!deleted) return res.status(404).json({ error: "Record not found" });
        res.json({ message: "Record deleted" });
    } catch (err) {
        res.status(500).json({ error: "Failed to delete record" });
    }
});

export default router;