import {NewsCard} from "../components";
import {useEffect, useState} from "react";
import {postService} from "../service";

const AllNewsView = () => {
    const [items, setItems] = useState([]);

    const getData = async () => {
        return await postService
            .getAll()
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
        <div className="flex flex-col mx-[10%] gap-5 mt-4">
            <div className="flex justify-between items-center border-b-2 py-3">
                <h2 className="text-xl font-semibold p-0 m-0">Barcha Yangiliklar</h2>
            </div>
            <div className="flex flex-wrap gap-3 justify-start px-4">
                {items?.map((elem, index) => {
                    return <NewsCard key={index} {...elem} />;
                })}
            </div>
        </div>
    );
};

export default AllNewsView;
