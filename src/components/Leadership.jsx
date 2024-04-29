/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */

import {api_url} from "../constants/index.js";

const Leadership = ({ ...items }) => {
  return (
    <div className="flex bg-white gap-8 p-5 border shadow-lg w-[48%] max-md:w-[90%] max-md:flex max-md:flex-col max-md:items-center max-md:gap-2 max-md:p-5">
      <div className="flex items-center just w-[45%] max-md:w-full">
        <img
          src={`${api_url}/leadership/img/${items.image}`}
          className="w-full h-[25vh] border-2 border-orange-400 max-md:h-[30vh]"
          alt="#"
        />
      </div>
      <div className="flex flex-col gap-2 w-[100%]">
        <h1 className="text-[22px] max-md:text-[17px] max-md:text-center max-md:leading-5 text-gray-950 font-semibold leading-8">
          {items.name}
        </h1>
        <span className="text-[15px] text-gray-900 max-md:text-[12px] max-md:text-center">
          {items.position}
        </span>
        <h1 className="max-md:text-[13px] max-md:text-center">
          <b className="max-md:text-[13px]">Telefon:</b> {items.phone}
        </h1>
        <h1 className="max-md:text-[13px] max-md:text-center">
          <b className="max-md:text-[13px]">Pochta: </b>
          {items.email}
        </h1>
      </div>
    </div>
  );
};

export default Leadership;
