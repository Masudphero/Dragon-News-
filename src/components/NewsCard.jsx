

import { FaStar, FaEye } from 'react-icons/fa';
import demoUser from "../assets/demo-card-thumbnail.png"
import userDamo from "../assets/dragon.png"

const NewsCard = ({news}) => {
  console.log(news)
  return (
    <div className="card w-full  bg-base-100 shadow-md border border-gray-200">
      <div className="card-body p-4">
        <div className="flex items-center mb-2">
          <img
            src={news?.thumbnail_url}
            alt="Author"
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <h3 className="font-semibold text-sm">Awlad Hossain</h3>
            <p className="text-xs text-gray-500">2022-08-21</p>
          </div>
        </div>
        <h2 className="card-title text-lg font-bold mb-2">
          Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden,
          Military, News, Russia, Security, UK, Ukraine, United States, Worthy News (Worthy News).
        </p>
        <figure className="mb-4">
          <img

          src={news?.thumbnail_url}
            alt="News"
            className="w-full h-96 rounded-lg"
          />
        </figure>
        <button className="btn btn-link text-blue-500 hover:text-blue-700 px-0">
          Read More
        </button>
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center text-yellow-500">
            <FaStar className="mr-1" />
            <span className="text-sm font-semibold">4.9</span>
          </div>
          <div className="flex items-center text-gray-500">
            <FaEye className="mr-1" />
            <span className="text-sm">499</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
// news?.thumbnail_url
// news?.thumbnail_url