import React, { useEffect, useState } from "react";
import { updateRecord, getRecordById, deleteRecord } from "../api";
import { useParams, useNavigate } from "react-router-dom";

const EditRecord = () => {
    const { id } = useParams();
    const [form, setForm] = useState(null);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        getRecordById(id)
            .then(record => {
                if (!record) throw new Error("Not found");
                setForm({
                    droneId: record.droneId,
                    issueDescription: record.issueDescription,
                    maintenanceDate: record.maintenanceDate.split("T")[0],
                    technicianName: record.technicianName,
                    status: record.status
                });
            })
            .catch(() => setError("Record not found"));
    }, [id]);

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async e => {
        e.preventDefault();
        setError("");
        try {
            await updateRecord(id, form);
            navigate("/records");
        } catch {
            setError("Failed to update record");
        }
    };

    const handleDelete = async () => {
        if (!window.confirm("Are you sure you want to delete this record?")) return;
        try {
            await deleteRecord(id);
            navigate("/records");
        } catch {
            setError("Failed to delete record");
        }
    };

    if (!form) return <div>{error ? error : "Loading..."}</div>;

    return (
        <div style={{ maxWidth: 500, margin: "auto" }}>
            <h2>Edit Maintenance Record</h2>
            <form onSubmit={handleSubmit}>
                <input name="droneId" placeholder="Drone ID" value={form.droneId} onChange={handleChange} required />
                <br /><br />
                <textarea name="issueDescription" placeholder="Issue Description" value={form.issueDescription} onChange={handleChange} required />
                <br /><br />
                <input type="date" name="maintenanceDate" value={form.maintenanceDate} onChange={handleChange} required />
                <br /><br />
                <input name="technicianName" placeholder="Technician Name" value={form.technicianName} onChange={handleChange} required />
                <br /><br />
                <select name="status" value={form.status} onChange={handleChange}>
                    <option value="Pending">Pending</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Completed">Completed</option>
                </select>
                <br /><br />
                <button type="submit">Update Record</button>
                <button type="button" style={{ marginLeft: "1rem", color: "red" }} onClick={handleDelete}>Delete</button>
                {error && <div style={{ color: "red" }}>{error}</div>}
            </form>
        </div>
    );
};

export default EditRecord;