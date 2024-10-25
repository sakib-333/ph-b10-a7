import React from "react";
import AboutUs from "./about-us/AboutUs";
import QuickLinks from "./quick-links/QuickLinks";
import Subscribe from "./subscribe/Subscribe";
import Copyright from "./copyright/Copyright";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="max-w-screen-2xl mx-auto flex flex-col items-center justify-center space-y-4">
        <img src="/logo-footer.png" alt="footer-logo" />
        <div className="text-white flex justify-around w-full">
          <AboutUs />
          <QuickLinks />
          <Subscribe />
        </div>
        <Copyright />
      </div>
    </div>
  );
};

export default Footer;
