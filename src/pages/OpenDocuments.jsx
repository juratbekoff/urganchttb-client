import {DocumentCard} from "../components/index.js";
import {useEffect, useState} from "react";
import {documentService} from "../service/index.js";

const OpenDocuments = () => {
    const [items, setItems] = useState([]);

    const getData = async () => {
        try {
            const res = await documentService.getAll();
            setItems(res.data?.documents);
        } catch (err) {
            console.error("Error fetching data:", err); // Log any errors
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);
    
    return (
        <div className="flex flex-col mx-[8%] gap-7 p-10 ">
            <div className="flex justify-between items-center border-b-2 py-3">
                <h2 className="text-xl font-semibold p-0 m-0">Ochiq ma'lumotlar</h2>
            </div>

            <div className={"grid grid-cols-2 gap-5 max-lg:grid-cols-2 max-md:grid-cols-1"}>
                {items?.map(item => (
                    <DocumentCard key={item.id} {...item} />
                ))}
            </div>
        </div>
    );
};

export default OpenDocuments;
