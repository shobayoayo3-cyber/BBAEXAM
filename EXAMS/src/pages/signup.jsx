import { Link } from "react-router-dom";

function SignUp() {
    return (
        <div className="mt-60 w-auto text-[20px] ">
            <div className="m-auto h-auto w-250 rounded-[12px] p-20 bg-white">
               <img src="/iconexam.png" alt="Exam platform" />
               <div className="text-[60px] font-[600]">Sign Up</div>
               <div className="mt-5">Enter Your Details below to create your account and get started</div>
               <div className="flex mt-10 ">
                    <div className="flex-1">
                        <div className="mb-2 mt-5">Full Name</div>
                        <input className="h-13 border border-1px p-4 w-100 rounded-[10px]" type="text" name="" id="" placeholder="enter..."/>
                        <div className="mb-2 mt-5">Date of Birth</div>
                        <input className="h-13 border border-1px p-4 w-100 rounded-[10px]" type="date" />
                        <div className="mb-2 mt-5">Nationality</div>
                        <input className="h-13 border border-1px p-4 w-100 rounded-[10px]" type="text" />
                        <div className="mb-2 mt-5">Password</div>
                        <input className="h-13 border border-1px p-4 w-100 rounded-[10px]" type="password" name="" id="" placeholder="enter..." />
                    </div>
                    <div>
                        <div className="mb-2 mt-5">Email</div>
                        <input className="h-13 border border-1px p-4 w-100 rounded-[10px]" type="text" placeholder="example@gmail.com"/>
                        <div className="mb-2 mt-5">Phone Number</div>
                        <input className="h-13 border border-1px p-4 w-100 rounded-[10px]" type="tel" placeholder="+45-1344-343" />
                        <div className="mb-2 mt-5">ID Type</div>
                        <input className="h-13 border border-1px p-4 w-100 rounded-[10px]"type="text" placeholder="Select"/>
                        <div className="mb-2 mt-5">Confirm Password</div>
                        <input className="h-13 border border-1px p-4 w-100 rounded-[10px]" type="password" placeholder="enter" />
                    </div>
               </div>
               <div className="flex gap-4">
                <button className="flex-1 text-center mt-10 w-100 rounded-[10px] border border-1px h-14">Cancel</button>
                <button className="flex-1 text-center mt-10 w-100 border border-1px h-14 text-white rounded-[10px] bg-[#4931A9]" >Confirm</button>
               </div>
               <div className="flex items-center justify-center mt-10"> 
                    <div>Already have an account?</div>
                    <Link to="/login" className="text-[#4931A9] font-[700]">Login</Link>
               </div>
            </div>
        </div>
    );
}

export default SignUp;