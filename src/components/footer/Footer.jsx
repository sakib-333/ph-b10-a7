import React from "react";
import AboutUs from "./about-us/AboutUs";
import QuickLinks from "./quick-links/QuickLinks";
import Subscribe from "./subscribe/Subscribe";
import Copyright from "./copyright/Copyright";

const Footer = () => {
  return (
    <div className="bg-black h-screen w-full text-white flex items-end justify-center">
      <div className="max-w-screen-2xl w-full flex flex-col items-center">
        <img src="/logo-footer.png" alt="footer logo" />
        <div className="w-full px-4 mb-12 space-y-4 md:flex md:items-center md:justify-between">
          <AboutUs />
          <QuickLinks />
          <Subscribe />
        </div>
        <hr className="w-full border-t-2 border-slate-500" />
        <Copyright />
      </div>
    </div>
  );
};

export default Footer;
