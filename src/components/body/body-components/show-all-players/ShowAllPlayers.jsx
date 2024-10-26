import React from "react";
import SinglePlayer from "../single-player/SinglePlayer";

const ShowAllPlayers = ({
  selectedPlayers,
  handleAvailablePlayersSection,
  handleSelectedPlayersSection,
  availablePlayersSec,
  selectedPlayersSec,
  players,
  handleIncreaseSelectedPlayers,
}) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="font-bold md:text-3xl lg:text-4xl">Available Players</h1>
        <div>
          <button
            className="px-3 py-1 border rounded-l-md"
            style={{ backgroundColor: availablePlayersSec ? "#ff0" : "#fff" }}
            onClick={handleAvailablePlayersSection}
          >
            Available
          </button>
          <button
            className="px-3 py-1 border rounded-r-md"
            style={{ backgroundColor: selectedPlayersSec ? "#ff0" : "#fff" }}
            onClick={handleSelectedPlayersSection}
          >
            Selected ({selectedPlayers.length})
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-4">
        {players.map((player) => (
          <SinglePlayer
            player={player}
            key={player.id}
            handleIncreaseSelectedPlayers={handleIncreaseSelectedPlayers}
          />
        ))}
      </div>
    </div>
  );
};

export default ShowAllPlayers;
