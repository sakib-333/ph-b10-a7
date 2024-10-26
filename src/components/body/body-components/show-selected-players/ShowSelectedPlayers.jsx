import React, { useState } from "react";

const ShowSelectedPlayers = ({
  handleAvailablePlayersSection,
  handleSelectedPlayersSection,
  selectedPlayers,
  availablePlayersSec,
  selectedPlayersSec,
  handleDecreaseSelectedPlayers,
}) => {
  const [removeAlert, setRemoveAlert] = useState(false);

  const handleRemovePlayer = (id) => {
    // setRemoveAlert((c) => !c);
    handleDecreaseSelectedPlayers(id);
  };
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="font-bold md:text-3xl lg:text-4xl">
          Selected Player ({selectedPlayers.length}/6)
        </h1>
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
      <div className="space-y-3">
        {selectedPlayers.map((player) => (
          <div
            key={`selected_player_${player.id}`}
            className="p-3 border rounded-lg flex items-center justify-between"
          >
            <div className="flex items-center">
              <img className="w-20 h-20" src={player.img} alt={player.name} />
              <div>
                <h1 className="font-bold text-xl">{player.name}</h1>
                <p className="text-gray-500">{player.role}</p>
                <p className="text-gray-500">Price: {player.price}</p>
              </div>
            </div>
            <button
              className="hover:scale-90"
              onClick={() => handleRemovePlayer(player.id)}
            >
              <img src="/delete-icon.svg" alt="delete-icon" />
            </button>
          </div>
        ))}
      </div>
      <div className="min-h-32 flex items-end">
        <button
          className="bg-yellow-300 font-bold px-3 py-2 rounded-lg hover:bg-yellow-200"
          onClick={handleAvailablePlayersSection}
        >
          Add More Player
        </button>
      </div>
    </div>
  );
};

export default ShowSelectedPlayers;
