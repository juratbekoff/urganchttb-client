/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import { useParams } from "react-router-dom";
import { NewsItem } from "../components";
import { useState, useEffect } from "react";
import { postService } from "../service";

const NewsItemView = () => {
  const { newsId } = useParams();
  const [items, setItems] = useState({});

  const getData = async () => {
    return await postService
      .getByNewsId(newsId)
      .then((res) => {
        setItems(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, items.id);

  return (
    <div className="flex flex-col justify-center items-center gap-7 mt-[2%] mx-[20%] max-md:mx-[5%] max-md:mt-5 p-6 border-2 rounded-[2px]">
      <NewsItem key={newsId} items={items} />
    </div>
  );
};

export default NewsItemView;
