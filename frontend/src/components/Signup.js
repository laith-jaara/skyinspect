import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");
        try {
            const res = await axios.post("http://localhost:5001/api/auth/register", { email, password });
            if (res.data && res.data.message) {
                setSuccess("Registration successful! You can now log in.");
                setEmail("");
                setPassword("");
                // Optionally, redirect to login after a short delay
                setTimeout(() => navigate("/"), 1500);
            } else {
                setError("Registration failed.");
            }
        } catch (err) {
            // Show backend error message if available
            setError(err.response?.data?.message || "Something went wrong.");
        }
    };

    return (
        <div className="container my-5" style={{ maxWidth: 400 }}>
            <h2>Sign Up</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            {success && <div className="alert alert-success">{success}</div>}
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>Email:</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label>Password:</label>
                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100">Sign Up</button>
            </form>
            <div className="mt-3 text-center">
                <span>Already have an account? </span>
                <Link to="/">Log in here</Link>
            </div>
        </div>
    );
}

export default Signup;