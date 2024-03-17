import React from "react";

const Earning = () => {
  const handleCopy = () => {
    const linkToCopy = document.getElementById("linkToCopy").innerText;
    navigator.clipboard.writeText(linkToCopy);
    alert("Text copied");
  };

  return (
    <>
      <main className="width my-[60px]">
        <section className="title text-left">
          <h2 className="font-semibold text-[30px] font-primary mb-6">
            Earnings
          </h2>
        </section>
        <section className="mt-[10px] md:grid grid-cols-12 lg:gap-x-8 md:gap-6">
          <div className="lg:col-span-4 col-span-5 plan-card p-4 rounded-[15px] bg-red shadow md:mb-0 mb-6">
            <div className="plan-section border-b-[2px] border-b-[#facc1552] ">
              <span className="text-white uppercase font-primary text-[14px] font-semibold">
                Total Deposit
              </span>
              <h3 className="font-semibold text-white font-primary mb-3 text-[20px]">
                0.0000 AVAX
              </h3>
            </div>
            <div className="duration-section border-b-[2px] border-b-[#facc1552] ">
              <span className="text-white uppercase font-primary text-[14px] font-semibold block mt-3">
                Dividends
              </span>
              <h3 className="font-semibold text-white font-primary mb-3 text-[20px]">
                0.0000 AVAX
              </h3>
            </div>
            <div className="roi-section border-b-[2px] border-b-[#facc1552] ">
              <span className="text-white uppercase font-primary text-[14px] font-semibold block mt-3">
                Available (Referral + Dividends)
              </span>
              <h3 className="font-semibold text-white font-primary mb-3 text-[20px]">
                0.0000 AVAX
              </h3>
            </div>
            <button
              className={`w-full block py-3 bg-white text-black font-primary font-semibold mt-3 rounded-lg`}
            >
              Nothing to widdraw
            </button>
          </div>
          <div className="lg:col-span-8 col-span-7 p-4 pb-2 rounded-[15px] bg-white shadow">
            <div className="plan-section border-b-[2px] border-b-[#facc1552] ">
              <span className="text-black  font-primary text-[14px] font-semibold">
                Referral link
              </span>
              <h3
                className="font-semibold text-black font-primary mb-3"
                id="linkToCopy"
              >
                https://avax.finance/?ref=123423423123123{" "}
                <span
                  onClick={handleCopy}
                  className="px-2 py-1 rounded-lg cursor-pointer text-white text-[14px] inline-block ms-2 bg-[#0ea5e9]"
                >
                  Copy
                </span>
              </h3>
            </div>
            <div className="duration-section border-b-[2px] border-b-[#facc1552] ">
              <span className="text-black  font-primary text-[14px] font-semibold block mt-3">
                Referral Count
              </span>
              <h3 className="font-semibold text-red font-primary mb-3 text-[20px]">
                0.0000 AVAX
              </h3>
            </div>
            <div className="roi-section border-b-[2px] border-b-[#facc1552] ">
              <span className="text-black  font-primary text-[14px] font-semibold block mt-3">
                Available referral earnings
              </span>
              <h3 className="font-semibold text-red font-primary mb-3 text-[20px]">
                0.0 AVAX
              </h3>
            </div>
            <div className="roi-section ">
              <span className="text-black  font-primary text-[14px] font-semibold block mt-3">
                Total referral earnings
              </span>
              <h3 className="font-semibold text-red font-primary mb-3 text-[20px]">
                0.0 AVAX
              </h3>
            </div>
          </div>
        </section>
      </main>
      <footer className="text-center text-white bg-red text-[14px] py-4 font-primary">Copyright © 2024 AVAX. All rights reserved.</footer>
    </>
  );
};

export default Earning;
