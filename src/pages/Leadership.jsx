/* eslint-disable react/no-unescaped-entities */
import {Leadership} from "../components";
import {useEffect, useState} from "react";
import {lsService} from "../service";

const LeadershipView = () => {
    const [items, setItems] = useState([]);

    const getData = async () => {
        return await lsService
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
        <div className="flex flex-col mx-[8%] gap-7 p-4">
            <div className="flex justify-between items-center border-b-2 py-3">
                <h2 className="text-xl font-semibold p-0 m-0">Rahbariyat</h2>
            </div>
            <div className="flex flex-wrap gap-10 max-md:flex max-md:flex-col max-md:items-center">
                {items?.map((elem, index) => {
                    return <Leadership key={index} {...elem} />;
                })}
            </div>
        </div>
    );
};

export default LeadershipView;
