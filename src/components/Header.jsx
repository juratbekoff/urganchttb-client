/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import "./css/header.css";

const Header = () => {
  return (
    <div className="mt-1">
      <div className="flex flex-col absolute gap-4 pl-8 left-[10%] top-[40%] max-md:top-[19.5%] w-[35%] max-md:w-[80%] max-md:left-0">
        <h1 className="font-bold text-white text-3xl max-md:text-[20px] max-md:leading-6 max-md:font-medium max-md:text-center max-md:pl-9">
          Urganch Tuman Tibbiyot Birlashmasi!
        </h1>
        <p className="break-normal text-[17px] header_title text-white font-semibold">
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
      <img src="/images/header2.jpg" alt="smth" className="max-md:h-[25vh] w-full h-[700px] bg-cover" />
    </div>
  );
};

export default Header;
