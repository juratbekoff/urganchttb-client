const Contact = () => {
  let items = [
    {
      title: "Manzil",
      descr: "Хоразм вилояти Урганч туманиИбн Сино кўчаси 12-уй",
    },
    {
      title: "Телефон",
      descr: "+998 (62) 352-14-73",
    },
    {
      title: "Факс",
      descr: "+998 (62) 352-16-88",
    },
    {
      title: "Электрон почта",
      descr: "urgench.tssb.shtab@ssv.uz",
    },
    {
      title: "Иш вахти",
      descr: "Душанба - Жума 8:30 дан 17:00гача",
    },
    {
      title: "Қабул кунлари",
      descr: "Душанба - Жума 8:30 дан17:00 гача",
    },
    {
      title: "Транспорт",
      descr: "Автобус: 6, 19",
    },
  ];

  return (
    <div className="flex flex-col w-full">
      <h1 className="text-2xl font-medium border-b-2 pb-2 max-md:inline-block max-md:text-[19px] max-md:font-medium">
        Manzil va telefonlar:
      </h1>

      <div className="flex flex-col mt-3">
        {items.map((elem) => {
          return (
            <span key={elem.title} className="max-md:text-[14px]">
              <b className="font-medium max-md:text-[15px]">{elem.title}: </b>
              {elem.descr}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Contact;
