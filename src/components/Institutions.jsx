const Institutions = ({ ...elem }) => {
  return (
    <div className="flex gap-5 bg-white p-5 border w-full shadow-lg max-md: flex max-md:flex-col max-md: items-center max-md:gap-4">
      <div className="flex items-center just w-[25%] max-md:w-full">
        <img
          src={elem.image ? elem.image : "images/25-son.png"}
          className="w-full h-[25vh] border-2 border-orange-400 max-md:h-[20vh]"
          alt="#"
        />
      </div>
      <div className="flex flex-col gap-2 w-[100%]">
        <h1 className="text-2xl font-semibold max-md:text-[16px] max-md:mt-0 leading-5">
          {elem.title}
        </h1>
        <p className="text-[16px] font-normal max-md:text-[13.5px] max-md:mt-0 max-md:leading-4">
          {elem.descr.slice(0, 450)}
        </p>
      </div>
    </div>
  );
};

export default Institutions;
