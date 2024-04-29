/* eslint-disable react/no-unescaped-entities */
import {Contacts, SubmitForm} from "../components";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactsView = () => {
    return (
        <div className="flex flex-col mx-[8%] gap-7 p-10 ">
            <ToastContainer/>
            <h1 className="text-[24px] font-semibold max-md:hidden">
                Biz bilan bog'lanish
            </h1>

            <div className="flex w-full gap-10 max-md:flex max-md:flex-col max-md:flex-col-reverse">
                <SubmitForm/>
                <Contacts/>
            </div>
        </div>
    );
};

export default ContactsView;
