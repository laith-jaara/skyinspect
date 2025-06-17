import React, { useEffect, useState } from "react";
import { getRecords, deleteRecord } from "../api";
import { Link } from "react-router-dom";
import "./Components.css";

const ViewRecords = () => {
    const [records, setRecords] = useState([]);
    const [error, setError] = useState("");

    const fetchRecords = async () => {
        try {
            const res = await getRecords();
            setRecords(res.data);
        } catch {
            setError("Failed to fetch records");
        }
    };

    useEffect(() => { fetchRecords(); }, []);

    const handleDelete = async id => {
        if (!window.confirm("Are you sure you want to delete this record?")) return;
        try {
            await deleteRecord(id);
            setRecords(records.filter(r => r._id !== id));
        } catch {
            setError("Failed to delete record");
        }
    };

    const getStatusClass = (status) => {
        switch (status.toLowerCase()) {
            case 'pending':
                return 'status-pending';
            case 'in progress':
                return 'status-in-progress';
            case 'completed':
                return 'status-completed';
            default:
                return '';
        }
    };

    return (
        <div className="records-container">
            <h2 className="records-title">Maintenance Records</h2>
            {error && <div className="error-message">{error}</div>}
            <table className="records-table">
                <thead>
                    <tr>
                        <th>Drone ID</th>
                        <th>Issue Description</th>
                        <th>Date</th>
                        <th>Technician</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {records.map(rec => (
                        <tr key={rec._id}>
                            <td>{rec.droneId}</td>
                            <td>{rec.issueDescription}</td>
                            <td>{new Date(rec.maintenanceDate).toLocaleDateString()}</td>
                            <td>{rec.technicianName}</td>
                            <td>
                                <span className={`status-badge ${getStatusClass(rec.status)}`}>
                                    {rec.status}
                                </span>
                            </td>
                            <td>
                                <Link to={`/edit/${rec._id}`} className="action-link">Edit</Link>
                                <button
                                    onClick={() => handleDelete(rec._id)}
                                    className="delete-btn"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    {records.length === 0 && (
                        <tr>
                            <td colSpan="6" className="no-records">No Records Found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ViewRecords;