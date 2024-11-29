import { Link } from "react-router-dom";
import userIcon from "../assets/dragon.png"

const Navbar = () => {
    return (
        <div className="flex justify-between items-center">
            <div className=""></div>
            <div className="nav space-x-5 font-semibold">
                <Link className="hover:text-red-500" to="/">Home</Link>
                <Link className="hover:text-red-500" to="/career">Career</Link>
                <Link className="hover:text-red-500" to="/about">About</Link>
            </div>
            <div className="login flex gap-2 items-center">
                <div className="">
                   <img className="w-12" src={userIcon} alt="" />
                   
                </div>
                <button className="bg-gray-600 p-3 rounded-l-lg text-cyan-50">Login</button>
            </div>
        </div>
    );
};

export default Navbar;