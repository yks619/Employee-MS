import React, { useState } from "react";
import "./style.css"
import axios from "axios"

const Login = () => {

const[values, setValues] = useState({
    email:"",
    password:""
});

const handleSubmit = (event) =>{
event.preventDefault()
axios.post("http://localhost:3001/auth/adminlogin", values)
.then(result => console.log(result))
.catch(err => console.log(err))
}

    return (
        <div className=" h-screen w-full flex justify-center items-center loginPage">
            <div className="p-8 rounded w-[50%] h-[50%] border loginForm">
                <h2 className="text-4xl text-center font-bold">Login</h2>
                <form  onSubmit={handleSubmit}  className="space-y-4">

                    <div className="">
                        <label className="text-xl" htmlFor="Email"><strong>Email</strong></label>
                        <input onChange={(e)=>setValues({...values, email: e.target.value})} type="email" name="email"autoComplete="off" placeholder="Enter Email" className=" text-black mt-2 w-full form-control rounded-md px-4 py-2"/>
                    </div>

                    <div>
                        <label className="text-xl" htmlFor="password"><strong>Password</strong></label>
                        <input onChange={(e)=>setValues({...values, password: e.target.value})} type="password" name="password" placeholder="Enter Password" className=" text-black mt-2 w-full form-control rounded-md px-4 py-2"/>
                    </div>
                    <div className="flex justify-center items-center">
                    <button className="btn w-full  bg-blue-500 py-2 px-2 text-2xl rounded-md ">Log in</button>
                    </div>

                    <div>
                        <input type="checkbox" name="tick" id="tick" className="me-2" />
                        <label className="font-bold" htmlFor="password">You are Agree with terms & conditions</label>                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
