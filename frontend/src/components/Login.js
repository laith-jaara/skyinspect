import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login({ onLogin }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            const res = await axios.post("http://localhost:5001/api/auth/login", { email, password });
            localStorage.setItem("token", res.data.token);
            onLogin(res.data.email);
            navigate("/"); // Redirect to home after login
        } catch (err) {
            setError(err.response?.data?.message || "Login failed");
        }
    };

    return (
        <div className="container my-5" style={{ maxWidth: 400 }}>
            <h2>Login</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>Email</label>
                    <input
                        type="email"
                        className="form-control"
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        required
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <button className="btn btn-primary w-100" type="submit">Login</button>
            </form>
            <div className="mt-3 text-center">
                <span>Don't have an account? </span>
                <Link to="/signup">Sign up here</Link>
            </div>
        </div>
    );
}

export default Login;