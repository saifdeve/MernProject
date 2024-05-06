import { useState } from "react";
import Signin from "../assest/signin.gif";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Login(){
    const [showPassword, setShowPassword] = useState(true);
    const [data,setData] = useState({
        email :"",
        password:""
    });
    const handleOnChange = (e)=>{
        const {name , value} = e.target
        setData((preve)=>{
            return{
                ...preve,
                [name]: value
            }
        })
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
    }
    console.log('data login ',data)
    return(
        <section id="login" className="">
            <div className="mx-auto container p-4">
                <div className="bg-white p-4 py-5 max-w-md mx-auto">
                    <div className="w-20 h-20  mx-auto ">
                        <img src={Signin} alt="login icons"/>
                    </div>
                    <form className="pt-6" onSubmit={handleSubmit}>
                        <div className="grid mt-2">
                            <label className="ml-2">Email :</label>
                            <div className="bg-slate-100 p-2 mt-2">
                                <input className="w-full h-full outline-none bg-transparent" 
                                    type="email" 
                                    placeholder="enter email" 
                                    name="email"
                                    value={data.email}
                                    onChange={handleOnChange}
                                />
                            </div>
                        </div>
                        <div className="grid mt-2">
                            <label className="ml-2">Password :</label>
                            <div className="bg-slate-100 p-2 mt-2 flex items-center">
                                <input className="w-full h-full outline-none bg-transparent" 
                                    type={showPassword ? "password": "text"} 
                                    placeholder="enter password"
                                    name="password"
                                    value={data.password}
                                    onChange={handleOnChange}
                                    />
                                <div className="cursor-pointer" onClick={()=> setShowPassword(preve => !preve) }>
                                    {
                                        showPassword ? <FaEye/> : <FaEyeSlash/>
                                    }
                                    
                                </div>
                            </div>
                            <Link to={'/forget-password'} className="ml-auto block w-fit hover:underline hover:text-red-600">Forget password ?</Link>
                        </div>
                        <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6">Login</button>
                    </form>
                    <p className="my-3">Don't have account ?<Link to={'/sign-up'} className="text-red-600 hover:underline hover:text-red-800">Sign up</Link></p>
                </div>

            </div>
        </section>
    );
}