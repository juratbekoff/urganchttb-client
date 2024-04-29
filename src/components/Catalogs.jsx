import {api_url} from "../constants/index.js";

const Catalogs = ({ ...elem }) => {
  return (
    <div className="flex bg-white gap-12 p-5 border shadow-lg w-full max-md: flex max-md:flex-col max-md: items-center max-md:gap-4">
      <div className="flex items-center just w-[30%] max-md:w-full">
        <img
          src={`${api_url}/catalogs/img/${elem.image}`}
          className="w-full h-[25vh] border-2 border-orange-400 max-md:h-[20vh]"
          alt="#"
        />
      </div>
      <div className="flex flex-col gap-2 w-[100%]">
        <h1 className="text-2xl font-medium max-md:text-[16px] max-md:mt-0 leading-5">
          {elem.title}
        </h1>
        <p className="text-[16px] font-normal break-all max-md:text-[13.5px] max-md:mt-0 max-md:leading-4">
          {elem.descr}
        </p>
      </div>
    </div>
  );
};

export default Catalogs;
