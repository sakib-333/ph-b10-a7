import React from "react";

const Subscribe = () => {
  return (
    <div className="space-y-3">
      <h1 className="font-bold">Subscribe</h1>
      <p className="max-w-72 text-xs text-slate-200">
        Subscribe to our newsletter for the latest updates.
      </p>
      <div className="flex space-x-3">
        <input
          className="px-3 py-1 rounded-lg "
          type="text"
          placeholder="Enter your email"
        />
        <button className="px-3 py-1 rounded-lg bg-gradient-to-r from-purple-300 to-yellow-300 text-black font-bold">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
