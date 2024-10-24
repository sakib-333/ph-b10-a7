import React from "react";
import Navbar from "./header-components/navbar/Navbar";
import Banner from "./header-components/banner/Banner";

const Header = () => {
  return (
    <div className="p-4 space-y-4">
      <Navbar />
      <Banner />
    </div>
  );
};

export default Header;
