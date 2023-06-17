import { Link } from "react-router-dom";
import "./css/news.css";

/* eslint-disable react/no-unescaped-entities */
const NewsCard = ({ ...elem }) => {
  return (
    <>
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md">
        <Link to={`/item/${elem.id}`}>
          <h5
            className="mb-2 text-[20px] font-[400] tracking-tight text-gray-900 max-md:text-[15px]"
            style={{ lineHeight: "1.3" }}
          >
            {elem.title.slice(0, 100)}...
          </h5>
        </Link>
        <p className="max-md:hidden news_card_descr mb-3 font-normal text-[15px] leading-5 text-gray-700">
          {elem.descr.slice(0, 150)}...
        </p>
        <Link
          to={`/item/${elem.id}`}
          className="inline-flex items-center px-6 py-2 text-[15px] font-medium text-center text-white bg-[#1A6F96] rounded-lg hover:bg-[#1A6F96] focus:ring-4 focus:outline-none focus:ring-blue-300 max-md:text-[12px] max-md:py-1 max-md:px-4 max-md:rounded max-md:font-normal"
        >
          Ba'tafsil
          <svg
            aria-hidden="true"
            className="w-4 h-4 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </Link>
      </div>
    </>
  );
};

export default NewsCard;
