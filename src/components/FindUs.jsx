import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const FindUs = () => {
    return (
        <div>
             <h2 className="font-bold mb-3">Find Us On</h2>
             <div className="join flex join-vertical *:bg-base-100">
  <button className="btn justify-start join-item">
   <FaFacebook className="text-blue-500"></FaFacebook>Facebook</button>
  <button className="btn justify-start join-item">
    <FaTwitter className="text-blue-500"></FaTwitter>Twitter</button>
  <button className="btn justify-start join-item">
    <FaInstagram className="text-red-500"></FaInstagram>Instagram</button>
</div>
        </div>
    );
};

export default FindUs;