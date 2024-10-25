import React, { useState } from "react";
import ShowAllPlayers from "./body-components/show-all-players/ShowAllPlayers";
import ShowSelectedPlayers from "./body-components/show-selected-players/ShowSelectedPlayers";

const Body = ({ players }) => {
  const [selectedSection, setSelectedSection] = useState(true);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const handleSelectedSection = () => setSelectedSection((c) => !c);

  const handleIncreaseSelectedPlayers = (player) => {
    if (!selectedPlayers.includes(player)) {
      setSelectedPlayers((players) => [...players, player]);
    }
  };
  const handleDecreaseSelectedPlayers = (id) => {
    setSelectedPlayers((players) =>
      players.filter((player) => player.id !== id)
    );
  };

  return (
    <div className="p-4">
      {selectedSection && (
        <ShowAllPlayers
          selectedPlayers={selectedPlayers}
          selectedSection={selectedSection}
          handleSelectedSection={handleSelectedSection}
          players={players}
          handleIncreaseSelectedPlayers={handleIncreaseSelectedPlayers}
        />
      )}
      {!selectedSection && (
        <ShowSelectedPlayers
          selectedSection={selectedSection}
          selectedPlayers={selectedPlayers}
          handleSelectedSection={handleSelectedSection}
          handleDecreaseSelectedPlayers={handleDecreaseSelectedPlayers}
        />
      )}
    </div>
  );
};

export default Body;
