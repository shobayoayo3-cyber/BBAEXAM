import React from "react";
import { Link } from "react-router-dom";

function LogIn() {
    return (
        <>
        <div className="mt-80 m-auto w-200 flex flex-col justify-center items-center bg-white p-10 ">
            <div className="flex justify-center items-center">
                <img src="/iconexam.png" alt="Exam platform" />
            </div>

                <div className="text-[45px] font-[600] ">Welcome Back</div>
                <div className="text-[20px] font-[400]">Glad to see You again 👋</div>
                <div className="text-[20px] font-[400]">Log in to your Account below</div>
            <div className="mt-10">
                <button className="text-center rounded-[10px] w-150 border border-1px h-14"> <i className="fa-brands fa-google "></i> Continue with Google</button>
                <div className="flex flex-col mt-10">
                    <div className="">Email</div>
                    <input type="text" placeholder="enter email..." className="w-150 rounded-[10px] h-14 p-5 border border-1px" />
                    <div className="mt-5">Password</div>
                    <input type="password" placeholder="enter password..." className="w-150 rounded-[10px] h-14 p-5 border border-1px"/>
                </div>
                <button className="text-center mt-10 w-150 border border-1px h-14 text-white rounded-[10px] bg-[#4931A9]"> Login</button>
                <a href="" className="mt-10 flex justify-center items-center">Forget Password?</a>
                <div className="flex  mt-5 gap-4 justify-center items-center">
                    <div>Don't have an account?</div>
                    <Link to="/signup" className="text-[#4931A9] font-[700]">Sign Up for Free</Link>
                </div>
            </div>
        </div>
        </>
    );
}

export default LogIn;