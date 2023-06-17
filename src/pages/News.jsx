/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import { NewsCard } from "../components";
import { useEffect, useState } from "react";
import { postService } from "../service";
import "../components/css/news.css";

const NewsView = () => {
  const [items, setItems] = useState([]);

  const getData = async () => {
    return await postService
      .getByLimit(6)
      .then((res) => {
        setItems(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex flex-col mx-[10%] gap-5 mt-2">
      <div className="flex justify-between items-center border-b-2 border-t-2 py-3">
        <h2 className="text-2xl font-semibold p-0 m-0 max-md:text-[16px]">
          Yangiliklar
        </h2>
        <Link to={"/news"} className="text-center news_header_all">
          Barchasini o'qish -{">"}
        </Link>
      </div>
      <div className="flex flex-wrap gap-3 justify-start px-4">
        {items.length === 0
          ? "Malumotlar topilmadi"
          : items?.map((elem, index) => {
              return <NewsCard key={index} {...elem} />;
            })}
      </div>
      <div className="flex justify-center items-center">
        <Link
          to={"/news"}
          className="text-center px-5 py-3 rounded-md bg-slate-200 text-black hover:bg-[#1A6F96] hover:transition duration-75 ease-in-out hover:text-white max-md:px-3 max-md:py-2 max-md:text-[11px] max-md:rounded-sm"
        >
          Barchasini o'qish
        </Link>
      </div>
    </div>
  );
};

export default NewsView;
