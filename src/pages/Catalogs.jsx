/* eslint-disable react/no-unescaped-entities */
import {Catalogs} from "../components";
import {useEffect, useState} from "react";
import {catalogService} from "../service";

const CatalogsView = () => {
    const [items, setItems] = useState([]);

    const getData = async () => {
        return await catalogService
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
        <div className="flex flex-col mx-[8%] gap-7 p-10 ">
            <div className="flex justify-between items-center border-b-2 py-3">
                <h2 className="text-xl font-semibold p-0 m-0">Barcha Bo'limlar</h2>
            </div>
            {items?.map((elem, index) => {
                return <Catalogs key={index} {...elem} />;
            })}
        </div>
    );
};

export default CatalogsView;
