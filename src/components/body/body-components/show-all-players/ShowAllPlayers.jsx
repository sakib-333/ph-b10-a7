import React from "react";
import SinglePlayer from "../single-player/SinglePlayer";

const ShowAllPlayers = ({
  selectedPlayers,
  selectedSection,
  handleSelectedSection,
  players,
  handleIncreaseSelectedPlayers,
}) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="font-bold md:text-3xl lg:text-4xl">Available Players</h1>
        <div className="w-56 flex items-center justify-between border rounded-lg">
          <button
            className="w-1/2  border-r"
            style={{ backgroundColor: selectedSection ? "#ff0" : "" }}
            onClick={handleSelectedSection}
          >
            Available
          </button>
          <button
            className="w-full"
            style={{ backgroundColor: selectedSection ? "" : "#ff0" }}
            onClick={handleSelectedSection}
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
