import React from "react";

const Banner = ({ addMoreCoins }) => {
  return (
    <div
      className="w-full h-[490px] rounded-2xl flex flex-col items-center justify-center space-y-3 text-center"
      style={{
        backgroundImage: 'url("/bg-shadow.png")',
        backgroundSize: "100% 100%",
        backgroundColor: "#000",
      }}
    >
      <img src="/banner-main.png" alt="banner-main" />
      <h1 className="text-white font-bold text-2xl md:text-3xl lg:text-4xl">
        Assemble Your Ultimate Dream 11 Cricket Team
      </h1>
      <p className="text-slate-400">Beyond Boundaries Beyond Limits</p>
      <div className="p-1 border w-fit rounded-lg hover:scale-95">
        <button
          className="bg-yellow-300 px-3 py-1 rounded-lg font-bold w-full"
          onClick={addMoreCoins}
        >
          Claim Free Credit
        </button>
      </div>
    </div>
  );
};

export default Banner;
