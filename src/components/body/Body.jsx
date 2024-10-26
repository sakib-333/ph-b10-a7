import React, { useState } from "react";
import ShowAllPlayers from "./body-components/show-all-players/ShowAllPlayers";
import ShowSelectedPlayers from "./body-components/show-selected-players/ShowSelectedPlayers";
import SubscribeSection from "./body-components/subscribe-section/SubscribeSection";
import { Alert } from "../alerts/Alert";

const Body = ({ players, coins, handleBuyPlayer }) => {
  const [selectedSection, setSelectedSection] = useState(true);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const handleSelectedSection = () => setSelectedSection((c) => !c);

  const handleIncreaseSelectedPlayers = (player) => {
    if (selectedPlayers.includes(player)) {
      Alert(false, "Player already exist!");
    } else if (selectedPlayers.length > 5) {
      Alert(false, "Squad is full!");
    } else if (coins < player.price) {
      Alert(false, "Please add more coins!");
    } else {
      setSelectedPlayers((players) => [...players, player]);
      handleBuyPlayer(player.price);
      Alert(true, "Successfully brought!");
    }
  };
  const handleDecreaseSelectedPlayers = (id) => {
    setSelectedPlayers((players) =>
      players.filter((player) => player.id !== id)
    );
    Alert(true, "Player removed!");
  };

  return (
    <div className="p-4 space-y-4">
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
      <div className="rounded-lg relative h-80">
        <SubscribeSection />
      </div>
    </div>
  );
};

export default Body;
