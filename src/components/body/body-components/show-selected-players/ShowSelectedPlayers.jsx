import React from "react";

const ShowSelectedPlayers = ({
  selectedSection,
  handleSelectedSection,
  selectedPlayers,
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
    </div>
  );
};

export default ShowSelectedPlayers;
