import React, { useState } from "react";
import AvailablePlayers from "./body-components/available-players/AvailablePlayers";

const Body = () => {
  const [selectedSection, setSelectedSection] = useState(true);

  const handleSelectedSection = () => setSelectedSection((c) => !c);

  return (
    <div className="p-4">
      <AvailablePlayers
        selectedSection={selectedSection}
        handleSelectedSection={handleSelectedSection}
      />
    </div>
  );
};

export default Body;
