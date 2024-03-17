import React from "react";

const Plan = () => {
  const planContent = [
    {
      plan: "Plan 1",
      title: "8% Daily",
      duration: "14 days",
      roi: "112%",
      btnTitle : "Contract start"
    },
    {
      plan: "Plan 2",
      title: "7.5% Daily",
      duration: "21 days",
      roi: "158%",
      btnTitle : "Contract start"
    },
    {
      plan: "Plan 3",
      title: "7% Daily",
      duration: "28 days",
      roi: "196%",
      btnTitle : "Contract start"
    },
    {
      plan: "Plan 4",
      title: "8% Daily",
      duration: "14 days",
      roi: "294%",
      btnTitle : "Contract not started"
    },
    {
      plan: "Plan 5",
      title: "7.5% Daily",
      duration: "21 days",
      roi: "457%",
      btnTitle : "Contract not started"
    },
    {
      plan: "Plan 6",
      title: "7% Daily",
      duration: "28 days",
      roi: "665%",
      btnTitle : "Contract not started"
    },
  ];

  return (
    <main className="width my[60px]">
      <section className="title text-left">
        <h2 className="font-semibold text-[30px] font-primary mb-6">
          Choose your plan
        </h2>
      </section>
      <section className="mt-[10px] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-7 gap-4">
        {planContent.map((element, index) => {
          return (
            <div
              className=" plan-card p-4 rounded-[15px] bg-white shadow"
              key={index}
            >
              <div className="plan-section text-center border-b-[2px] border-b-red">
                <span className="text-red uppercase font-primary text-[14px] font-bold">
                  {element.plan}
                </span>
                <h3 className="font-bold font-primary mb-2 text-[20px]">
                  {element.title}
                </h3>
              </div>
              <div className="duration-section text-center py-2 border-b-[2px] border-b-red flex items-center justify-between">
                <p className="uppercase font-primary font-[700]">Duration</p>
                <p className="font-[700] font-primary ">
                  {element.duration}
                </p>
              </div>
              <div className="roi-section text-center py-2 border-b-[2px] border-b-red flex items-center justify-between">
                <p className="uppercase font-primary font-[700]">ROI</p>
                <p className="font-[700] font-primary ">{element.roi}</p>
              </div>
              <div className="roi-section text-center py-2 mb-2  border-b-[2px] border-b-red flex items-center justify-between">
                <div className="bg-[#f6f3ef] py-2 px-3 rounded-lg flex items-center justify-between w-full">
                  <p className="text-gray text-[14px] font-semibold font-secondary">
                    Minimum 0.05 AVAX
                  </p>
                  <p className="py-1 px-2 bg-white rounded-lg text-black font-bold font-secondary text-[14px]  ">
                    Return : 0 AVAX
                  </p>
                </div>
              </div>
              <button className={`${element.btnTitle === "Contract not started" ? "cursor-not-allowed bg-[#e31c23bb]" : " cursor-pointer bg-red"} w-full block py-3  text-white font-primary font-semibold mt-3 rounded-lg`}>{element.btnTitle}</button>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default Plan;
