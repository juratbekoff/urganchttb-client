import {FiDownload} from "react-icons/fi";
import {api_url} from "../constants/index.js";
import {Link} from "react-router-dom"

const DocumentCard = ({...elem}) => {
    return <div className={"border p-2 rounded-md flex gap-2 max-lg:flex-col"}>
        <div className={"w-[40%] max-lg:w-full"}>
            <img className={"h-36 w-full bg-cover"}
                 src={`${api_url}/open-documents/img/${elem?.cover_image}`}/>
        </div>

        <div className={"flex flex-col justify-around w-[60%] max-lg:w-full"}>
            <h1 className={"text-base"}>{elem?.title}</h1>

            <div className={"flex gap-3 justify-end max-lg:mt-1"}>
                <Link to={`${api_url}/open-documents/file/${elem?.file_url}`} target={"_blank"}
                      className={"flex items-center gap-1 cursor-pointer font-medium"}>
                    <span>Yuklash</span>
                    <FiDownload/>
                </Link>

                <span>[{elem?.file_size}]</span>
            </div>
        </div>
    </div>;
};

export default DocumentCard;