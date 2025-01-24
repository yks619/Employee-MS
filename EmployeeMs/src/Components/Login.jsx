import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./style.css"

const Login = () => {
    const [values, setValues] = useState({
        email: "",
        password: ""
    });
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        
        // Basic form validation
        if (!values.email || !values.password) {
            alert("Please enter both email and password");
            return;
        }

        axios.post("http://localhost:3001/auth/adminlogin", values)
            .then(result => {
                if (result.data.success) {
                    navigate("/dashboard");
                } else {
                    alert("Login failed: Invalid credentials");
                }
            })
            .catch(err => {
                console.error(err);
                alert("An error occurred during login");
            });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div className="h-screen w-full flex justify-center items-center loginPage">
            <div className="p-8 rounded w-[50%] h-[50%] border loginForm">
                <h2 className="text-4xl text-center font-bold">Login</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="text-xl" htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input
                            id="email"
                            onChange={handleInputChange}
                            type="email"
                            name="email"
                            autoComplete="off"
                            placeholder="Enter Email"
                            className="text-black mt-2 w-full form-control rounded-md px-4 py-2"
                            required
                        />
                    </div>

                    <div>
                        <label className="text-xl" htmlFor="password">
                            <strong>Password</strong>
                        </label>
                        <input
                            id="password"
                            onChange={handleInputChange}
                            type="password"
                            name="password"
                            placeholder="Enter Password"
                            className="text-black mt-2 w-full form-control rounded-md px-4 py-2"
                            required
                        />
                    </div>

                    <div className="flex justify-center items-center">
                        <button 
                            type="submit" 
                            className="btn w-full bg-blue-500 py-2 px-2 text-2xl rounded-md"
                        >
                            Log in
                        </button>
                    </div>

                    <div>
                        <input 
                            type="checkbox" 
                            name="tick" 
                            id="tick" 
                            className="me-2" 
                        />
                        <label className="font-bold" htmlFor="tick">
                            I agree with terms & conditions
                        </label>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;