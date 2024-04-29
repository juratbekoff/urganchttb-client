/* eslint-disable react/prop-types */
import {api_url} from "../constants/index.js";

const NewsItem = ({ items }) => {
  return (
    <div className="w-full max-md:flex max-md:flex-col max-md:gap-3">
      <img
        src={`${api_url}/posts/img/${items.image}`}
        alt="image cannot be loaded!"
        className="border-2 h-[55vh] ml-[10%] max-md:ml-[0%] w-[80%] max-md:w-[100%] max-md:h-[30vh]"
      />
      <h1 className="text-[20px] mt-3 font-medium leading-7 italic break-all text-center max-md:text-[15px] max-md:leading-5">
        {items.title}
      </h1>
      <h1 className="italic text-center text-[17px] max-md:text-[14px] max-md:leading-5">
        {items.descr}{" "}
      </h1>
      <div className="flex gap-3 w-full justify-end mt-5 max-md:mt-2 max-md:flex max-md:flex-col">
        <h1 className="italic">
          <span className="text-orange-500 font-medium max-md:text-[14px]">
            chop etildi:{" "}
          </span>
          <b className="font-medium max-md:text-[13.5px]">
            {items.createdAt && items.createdAt.slice(0, 10)},{" "}
            {items.createdAt && items.createdAt.slice(11, 19)}
          </b>
        </h1>
        <h1 className="italic">
          <span className="text-orange-500 font-medium max-md:text-[14px]">
            oxirgi yangilanish:{" "}
          </span>
          <b className="font-medium max-md:text-[13.5px]">
            {items.updatedAt && items.updatedAt.slice(0, 10)},{" "}
            {items.updatedAt && items.updatedAt.slice(11, 19)}
          </b>
        </h1>
        <h1 className="italic font-medium max-md:hidden">
          <span className="text-orange-500 font-medium max-md:text-[14px]">
            ID:
          </span>
          <b className="font-medium max-md:text-[13.5px]"> {items.id} </b>
        </h1>
      </div>
    </div>
  );
};

export default NewsItem;
