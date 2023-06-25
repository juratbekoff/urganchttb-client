import { Link } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */
const Footer = () => {
  return (
    <footer className="bg-[#E8F0F4] flex justify-around mt-10 p-10 max-md:flex max-md:flex-col max-md:items-center max-md: gap-3">
      <a href="#" className="p-0 mt-3 max-md:w-20">
        <img src="/images/logo1.png" alt="smth" />
      </a>
      <ul className="flex flex-col gap-1 max-md: flex max-md:flex-col max-md: items-center">
        <h1 className="font-semibold text-xl pb-1 max-md:hidden">Sayt bo'ylab</h1>
        <Link to={"/"} className="text-[17px]">
          Asosiy
        </Link>
        <Link to={"/news"} className="text-[17px]">
          Yangiliklar
        </Link>
        <Link to={"/catalogs"} className="text-[17px]">
          Bo'limlar
        </Link>
        <Link to={"/institutions"} className="text-[17px]">
          Muassasalar
        </Link>
        <Link to={"/contact"} className="text-[17px]">
          Aloqa
        </Link>
      </ul>

      <ul className="flex">
        <ul className="flex flex-col max-md: flex max-md:flex-col max-md:items-center">
          <h1 className="font-semibold text-xl pb-1">Telefonlar</h1>
          <li>+998 (62) 352-14-73</li>
          <li>+998 (62) 352-14-73</li>
        </ul>
      </ul>

      <ul className="flex">
        <ul className="flex flex-col gap-2 max-md: flex max-md:flex-col max-md: items-center">
          <h1 className="font-semibold text-xl pb-1">Tarmoqlar</h1>
          <ul className="flex gap-2">
            <a href="https://t.me/urganchttbuz">
              <img src="/images/telegram.png" width="20px" alt="#" />
            </a>
            <a href="#">
              <img src="/images/instagram.png" width="20px" alt="#" />
            </a>
            <a href="#">
              <img src="/images/youtube.png" width="20px" alt="#" />
            </a>
          </ul>
        </ul>
      </ul>
    </footer>
  );
};

export default Footer;
