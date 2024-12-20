import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div className="flex gap-2 items-center bg-base-200">
            <p className="bg-[#2825b8] text-base-100 px-3 py-1 rounded-r-lg">Latest</p>
            
            <Marquee pauseOnHover={true} speed={50} className="space-x-10">
                <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima tempore maxime sed illum non doloribus maiores aspernatur. Sequi excepturi culpa obcaecati magni nulla, sed quas aliquid. Cupiditate quasi fugiat commodi!</Link> 
                <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima tempore maxime sed illum non doloribus maiores aspernatur. Sequi excepturi culpa obcaecati magni nulla, sed quas aliquid. Cupiditate quasi fugiat commodi!</Link> 
                <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima tempore maxime sed illum non doloribus maiores aspernatur. Sequi excepturi culpa obcaecati magni nulla, sed quas aliquid. Cupiditate quasi fugiat commodi!</Link> 
                </Marquee>
        </div>
    );
};

export default LatestNews;