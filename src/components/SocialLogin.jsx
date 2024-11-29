
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const SocialLogin = () => {
    return (
        <div>
            <h2 className="font-bold mb-3">Login with</h2>
             <div className="*:w-full space-y-3">
               <button className="btn border-blue-500"><FaGoogle></FaGoogle>Login with Google</button>
               <button className="btn border-blue-500"><FaGithub></FaGithub>Login with github</button>
             </div>
        </div>
    );
};

export default SocialLogin;