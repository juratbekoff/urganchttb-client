/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import "./css/header.css";

const Header = () => {
  return (
    <div className="mt-1">
      <div className="flex flex-col absolute gap-4 left-[10%] top-[40%] max-md:top-[22%] w-[35%] max-md:w-[60%]">
        <h1 className="font-semibold text-3xl max-md:inline-block max-md:text-[15px] max-md:leading-4">
          Urganch Tibbiyot Birlashmasi!
        </h1>
        <p className="break-normal text-[17px] header_title">
          Sog' va salomat hayot uchun bizning tibbiyot boshqarmamiz sizning
          do'stingiz. Biz sizning hayotingizni yaxshilaymiz va sizga chin
          ko'ngildan baxt istaymiz.
        </p>
        <Link
          to={"/contact"}
          className="border-none rounded-md outline-none bg-[#1A6F96] w-[40%] text-white px-6 py-2 text-[17px] text-center max-md:hidden"
        >
          Bog'lanish
        </Link>
      </div>
      <img src="/images/header.png" alt="smth" className="max-md:h-[25vh]" />
    </div>
  );
};

export default Header;
