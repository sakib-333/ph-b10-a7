import React from "react";
import SinglePlayer from "../single-player/SinglePlayer";

const ShowAllPlayers = ({ players }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-4">
      {players.map((player) => (
        <SinglePlayer player={player} key={player.id} />
      ))}
    </div>
  );
};

export default ShowAllPlayers;
