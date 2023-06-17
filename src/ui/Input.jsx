/* eslint-disable react/prop-types */
const Input = ({ placeholder, name, type = "text", onchange, value }) => {
  return (
    <>
      <input
        type={type}
        name={name}
        required
        className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 max-md:py-1 max-md:placeholder:text-[13.5px] max-md:rounded"
        placeholder={placeholder}
        onChange={onchange}
        value={value}
      />
    </>
  );
};

export default Input;
