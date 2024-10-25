import React, { useState } from "react";
import AvailablePlayers from "./body-components/available-players/AvailablePlayers";
import ShowAllPlayers from "./body-components/show-all-players/ShowAllPlayers";
import ShowSelectedPlayers from "./body-components/show-selected-players/ShowSelectedPlayers";

const Body = () => {
  const [selectedSection, setSelectedSection] = useState(true);

  const handleSelectedSection = () => setSelectedSection((c) => !c);

  return (
    <div className="p-4">
      <AvailablePlayers
        selectedSection={selectedSection}
        handleSelectedSection={handleSelectedSection}
      />
      {selectedSection && <ShowAllPlayers />}
      {!selectedSection && <ShowSelectedPlayers />}
    </div>
  );
};

export default Body;
