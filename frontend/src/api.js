import axios from "axios";

const API = axios.create({
    baseURL: process.env.REACT_APP_API_URL || "http://localhost:5000/api",
});

export const getRecords = () => API.get("/maintenance");
export const addRecord = (data) => API.post("/maintenance", data);
export const updateRecord = (id, data) => API.put(`/maintenance/${id}`, data);
export const deleteRecord = (id) => API.delete(`/maintenance/${id}`);
export const getRecordById = (id) => API.get(`/maintenance`).then(res => res.data.find(r => r._id === id));