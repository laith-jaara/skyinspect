import React, { useState } from "react";
import { addRecord } from "../api";
import { useNavigate } from "react-router-dom";
import "./Components.css";

const AddRecord = () => {
    const [form, setForm] = useState({
        droneId: "",
        issueDescription: "",
        maintenanceDate: "",
        technicianName: "",
        status: "Pending"
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async e => {
        e.preventDefault();
        setError("");
        try {
            await addRecord(form);
            navigate("/records");
        } catch (err) {
            setError(err.response?.data?.error || "Failed to add record");
        }
    };

    return (
        <div className="add-record-container">
            <h2 className="add-record-title">Add Maintenance Record</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label">Drone ID</label>
                    <input
                        className="form-control"
                        name="droneId"
                        placeholder="Enter Drone ID"
                        value={form.droneId}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label className="form-label">Issue Description</label>
                    <textarea
                        className="form-control"
                        name="issueDescription"
                        placeholder="Describe the issue"
                        value={form.issueDescription}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label className="form-label">Maintenance Date</label>
                    <input
                        type="date"
                        className="form-control"
                        name="maintenanceDate"
                        value={form.maintenanceDate}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label className="form-label">Technician Name</label>
                    <input
                        className="form-control"
                        name="technicianName"
                        placeholder="Enter Technician Name"
                        value={form.technicianName}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label className="form-label">Status</label>
                    <select
                        className="form-control"
                        name="status"
                        value={form.status}
                        onChange={handleChange}
                    >
                        <option value="Pending">Pending</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                    </select>
                </div>

                <button type="submit" className="submit-btn">Add Record</button>
                {error && <div className="error-message">{error}</div>}
            </form>
        </div>
    );
};

export default AddRecord;