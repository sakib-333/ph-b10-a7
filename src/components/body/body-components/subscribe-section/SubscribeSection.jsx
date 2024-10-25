import React from "react";

const SubscribeSection = () => {
  return (
    <div
      className="w-full h-80 border-2 flex flex-col items-center justify-center space-y-3 rounded-lg"
      style={{
        backgroundImage: 'url("/bg-shadow.png")',
        backgroundSize: "100% 100%",
      }}
    >
      <h1 className="font-bold text-xl md:text-2xl lg:text-3xl">
        Subscribe to our Newsletter
      </h1>
      <p className="text-slate-500">
        Get the latest updates and news right in your inbox!
      </p>
      <div className="flex items-center space-x-3">
        <input
          className="border px-3 py-1 rounded-lg"
          type="text"
          placeholder="Enter your email"
        />
        <button className="bg-gradient-to-r from-purple-300 to-yellow-300 px-3 py-1 rounded-lg font-bold">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default SubscribeSection;
