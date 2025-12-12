/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  let Links = [
    { name: "Asosiy", link: "/" },
    { name: "Yangiliklar", link: "/news" },
    { name: "Bo'limlar", link: "/catalogs" },
    { name: "Muassasalar", link: "/institutions" },
    { name: "Hujjatlar", link: "https://ssv.uz/uz/documentation", target: "_blank" },
    { name: "Bo'sh ish o'rinlari", link: "https://ish.mehnat.uz", target: "_blank" },
    { name: "Ochiq ma'lumotlar", link: "/open-documents" },
    { name: "Rahbariyat", link: "/leadership" },
    { name: "Birlashma haqida", link: "/about" },
    { name: "Aloqa", link: "/contact" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full top-0 left-0">
      <div className="flex items-center justify-between bg-white py-3 xl:px-10 px-5">
        <Link
          to={"/"}
          className="font-bold text-2xl cursor-pointer flex items-center gap-1 text-gray-800 max-lg:w-[65%]"
        >
          <span className="text-3xl text-indigo-600 mr-1 pt-2">
            <img src="images/logo1.png" className="w-12 max-lg:w-9" alt="Logo" />
          </span>
          <span className="max-lg:text-[16px] pt-1 text-[17px] whitespace-nowrap">
            Urganch TTB
          </span>
        </Link>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-6 top-4 cursor-pointer lg:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`max-lg:shadow-md max-lg:border z-50 lg:flex lg:items-center lg:pb-0 pb-12 absolute lg:static bg-white left-0 w-full lg:w-auto transition-all duration-500 ease-in-out ${open ? "top-16" : "top-[-490px]"
            }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="lg:ml-4 xl:ml-5 max-lg:ml-6 lg:my-0 my-4"
              onClick={() => setOpen(false)}
            >
              <Link
                to={link.link}
                target={link.target}
                className="text-gray-800 text-[13px] xl:text-sm max-lg:text-base hover:text-[#1A6F96] duration-300 whitespace-nowrap"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          to={"/contact"}
          className="max-lg:hidden border-none rounded-md bg-[#1A6F96] text-white px-4 py-2 text-[14px] whitespace-nowrap hover:bg-[#155a7a] transition-colors"
        >
          Bog'lanish
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
