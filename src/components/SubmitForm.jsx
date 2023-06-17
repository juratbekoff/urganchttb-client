/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { Input } from "../ui";
import { appService } from "../service";
import alert from "../helpers/alert";

const SubmitForm = () => {
  const [items, setItems] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    message: "",
  });

  const changeInputHandler = (e) => {
    setItems({ ...items, [e.target.name]: e.target.value });
  };

  const addFormHandler = async (e) => {
    e.preventDefault();
    const data = {
      name: items.name,
      surname: items.surname,
      email: items.email,
      phone: items.phone,
      message: items.message,
      gender: "erkak",
    };

    try {
      await appService.create(data);
      alert("SUCCESS");
    } catch (error) {
      console.log(error);
      alert("ERROR")
    }

    setItems({ name: "", surname: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="max-md:flex max-md:flex-col w-full ">
      <h1 className="max-md:inline-block hidden max-md:text-[19px] max-md:font-medium max-md:border-b-2 max-md:pb-2">
        Formani to'ldiring
      </h1>
      <form
        className="flex flex-col gap-2 w-full max-md:w-full max-md:mt-2"
        onSubmit={addFormHandler}
      >
        <Input
          placeholder={"Ismingiz"}
          name={"name"}
          type={"text"}
          onchange={changeInputHandler}
          value={items.name}
        />
        <Input
          placeholder={"Familiyangiz"}
          name={"surname"}
          type={"text"}
          onchange={changeInputHandler}
          value={items.surname}
        />
        <Input
          placeholder={"Email"}
          name={"email"}
          type={"email"}
          onchange={changeInputHandler}
          value={items.email}
        />
        <Input
          placeholder={"Telefon raqam"}
          name={"phone"}
          type={"number"}
          onchange={changeInputHandler}
          value={items.phone}
        />
        <textarea
          id="message"
          rows={4}
          name="message"
          className="block p-2.5 w-full text-sm bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 max-md:text-[13.5px]"
          placeholder="Xabarni kiriting"
          onChange={changeInputHandler}
          value={items.message}
          required
        ></textarea>

        <button
          type="submit"
          className="border-none rounded-md outLinkne-none bg-[#1A6F96] text-white px-6 py-2 text-[17px] max-md:text-[14px] max-md:rounded max-md:py-[6px]"
        >
          Yuborish
        </button>
      </form>
    </div>
  );
};

export default SubmitForm;
