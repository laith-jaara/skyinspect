import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AddRecord from "./components/AddRecord";
import ViewRecords from "./components/ViewRecords";
import EditRecord from "./components/EditRecord";
import About from "./components/About";
import Login from "./components/Login";
import Signup from "./components/Signup";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    // Check if user is logged in by looking for token
    const [user, setUser] = useState(localStorage.getItem("token") ? true : false);

    const handleLogin = (email) => {
        setUser(email);
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        setUser(false);
    };

    return (
        <div>
            <Navbar user={user} onLogout={handleLogout} />
            <Routes>
                {!user ? (
                    <>
                        <Route path="/signup" element={<Signup />} />
                        <Route path="*" element={<Login onLogin={handleLogin} />} />
                    </>
                ) : (
                    <>
                        <Route path="/" element={<Home />} />
                        <Route path="/add" element={<AddRecord />} />
                        <Route path="/records" element={<ViewRecords />} />
                        <Route path="/edit/:id" element={<EditRecord />} />
                        <Route path="/about" element={<About />} />
                        {/* Optionally, redirect /login or /signup to home if authenticated */}
                    </>
                )}
            </Routes>
        </div>
    );
}

export default App;