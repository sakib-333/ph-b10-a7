import React from "react";

const ShowSelectedPlayers = ({
  selectedSection,
  handleSelectedSection,
  selectedPlayers,
  handleDecreaseSelectedPlayers,
}) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="font-bold md:text-3xl lg:text-4xl">
          Selected Player ({selectedPlayers.length}/6)
        </h1>
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
                <p className="text-gray-500">{player.batting_style}</p>
              </div>
            </div>
            <button
              className="hover:scale-90"
              onClick={() => handleDecreaseSelectedPlayers(player.id)}
            >
              <img src="/delete-icon.svg" alt="delete-icon" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowSelectedPlayers;
