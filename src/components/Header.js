import Logo from "./Logo";
import { IoIosSearch } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header(){
    return(
        <header className="h-12 shadow-md bg-white">
            <div className="container mx-auto h-full flex items-center px-4 justify-between">
                <div className="">
                    <Link to={"/"}>
                        <Logo w={90} h={50}/>
                    </Link>

                </div>
                <div className="hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow-md"> 
                    <input className="w-full outline-none pl-2 leading-8 rounded-l-full text-sm" type="text" placeholder="Search products here ..."/>
                    <div className="text-lg min-w-[50px] h-8 flex items-center justify-center rounded-r-full ">
                        <IoIosSearch />
                    </div>

                </div>
                <div className="flex items-center gap-7">
                    <div className="text-2xl cursor-pointer">
                        <FaRegUserCircle />
                    </div>
                    <div className="text-2xl cursor-pointer relative">
                        <span><FaShoppingCart/></span>
                        <div className="absolute bottom-4 left-4 bg-red-500 w-4 h-4 rounded-full p-1 flex items-center justify-center ">
                            <p className="text-xs text-white">0</p>
                        </div>
                    </div>
                    <div>
                        <Link to={"/login"} className="bg-red-600 px-4 py-1 rounded-full text-white hover:bg-red-700">Login</Link>
                    </div>
                </div>
            </div>
        </header>
    );
}