/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  let Links = [
    { name: "Asosiy", link: "/" },
    { name: "Yangiliklar", link: "/news" },
    { name: "Bo'limlar", link: "/catalogs" },
    { name: "Muassasalar", link: "/institutions" },
    { name: "Aloqa", link: "/contact" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full top-0 left-0">
      <div className="flex md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <Link
          to={"/"}
          className="font-bold text-2xl cursor-pointer flex items-center gap-1
      text-gray-800 max-md:flex max-md:justify-between max-md:w-[65%]"
        >
          <span className="text-3xl text-indigo-600 mr-1 pt-2">
            <img src="images/logo1.png" className="w-14 max-md:w-9" />
          </span>
          <span className="max-md:inline-block max-md:text-[17px] max-md:pt-1 pt-1 text-[19px]">
            Urganch TTB
          </span>
        </Link>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in-out ${
            open ? "top-20 " : "top-[-490px] flex "
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="md:ml-8 text-xl md:my-0 my-7"
              onClick={() => setOpen(false)}
            >
              <Link
                to={link.link}
                className="text-gray-800 text-[17px] hover:text-gray-400 duration-500"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          to={"/contact"}
          className="max-md:hidden border-none rounded-md outline-none-none bg-[#1A6F96] text-white px-6 py-2 text-[17px] "
        >
          Bog'lanish
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
