import React from "react";

const Navbar = ({ coins }) => {
  return (
    <div className="flex items-center justify-between">
      <img src="/logo.png" alt="logo" />
      <div className="flex items-center space-x-4">
        <ul className="hidden lg:flex lg:space-x-4">
          <li>
            <a className="text-slate-600 hover:underline" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="text-slate-600 hover:underline" href="#">
              Fixture
            </a>
          </li>
          <li>
            <a className="text-slate-600 hover:underline" href="#">
              Teams
            </a>
          </li>
          <li>
            <a className="text-slate-600 hover:underline" href="#">
              Schedules
            </a>
          </li>
        </ul>
        <div className="w-fit flex items-center space-x-2 p-2 border rounded-lg">
          <span className="font-bold">{coins} Coin</span>
          <img
            className="w-5 h-5"
            src="/dollar-coin-icon.svg"
            alt="coin-logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
