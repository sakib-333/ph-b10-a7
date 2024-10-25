import React from "react";
import Navbar from "./header-components/navbar/Navbar";
import Banner from "./header-components/banner/Banner";

const Header = ({coins, addMoreCoins}) => {
  return (
    <div className="p-4 space-y-4">
      <Navbar coins={coins} />
      <Banner addMoreCoins={addMoreCoins}/>
    </div>
  );
};

export default Header;
