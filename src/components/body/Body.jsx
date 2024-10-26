import React, { useState } from "react";
import ShowAllPlayers from "./body-components/show-all-players/ShowAllPlayers";
import ShowSelectedPlayers from "./body-components/show-selected-players/ShowSelectedPlayers";
import SuccessfulBrought from "../alerts/SuccessfulBrought";
import AlertAlreadyExist from "../alerts/AlertAlreadyExist";
import AlertSquadFull from "../alerts/AlertSquadFull";
import AlertInsufficientCoins from "../alerts/AlertInsufficientCoins";
import SubscribeSection from "./body-components/subscribe-section/SubscribeSection";

const Body = ({ players, coins, handleBuyPlayer }) => {
  const [selectedSection, setSelectedSection] = useState(true);
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [success, setSuccess] = useState(false);
  const [alreadyExist, setAlreadyExist] = useState(false);
  const [squadFull, setSquadFull] = useState(false);
  const [insufficientCoins, setInsufficientCoins] = useState(false);

  const handleSelectedSection = () => setSelectedSection((c) => !c);

  const handleIncreaseSelectedPlayers = (player) => {
    if (selectedPlayers.includes(player)) {
      setAlreadyExist((c) => !c);
    } else if (selectedPlayers.length > 5) {
      setSquadFull((c) => !c);
    } else if (coins < player.price) {
      setInsufficientCoins((c) => !c);
    } else {
      setSelectedPlayers((players) => [...players, player]);
      handleBuyPlayer(player.price);
      setSuccess((c) => !c);
    }
  };
  const handleDecreaseSelectedPlayers = (id) => {
    setSelectedPlayers((players) =>
      players.filter((player) => player.id !== id)
    );
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
      {alreadyExist && <AlertAlreadyExist setAlreadyExist={setAlreadyExist} />}
      {squadFull && <AlertSquadFull setSquadFull={setSquadFull} />}
      {insufficientCoins && (
        <AlertInsufficientCoins setInsufficientCoins={setInsufficientCoins} />
      )}
      {success && <SuccessfulBrought setSuccess={setSuccess} />}
      <div className="rounded-lg relative h-80">
        <SubscribeSection />
      </div>
    </div>
  );
};

export default Body;
