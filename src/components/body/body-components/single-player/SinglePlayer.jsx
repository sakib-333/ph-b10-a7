import React from "react";

const SinglePlayer = ({ player, handleIncreaseSelectedPlayers }) => {
  const { id, name, team, img, role, batting_style, price } = player;
  return (
    <div className="border mx-auto rounded-xl p-4 space-y-3">
      <img className="rounded-xl bg-slate-100" src={img} alt={name} />
      <div className="flex items-center space-x-2">
        <img src="/profile.svg" alt="profile" />
        <h1 className="font-bold">{name}</h1>
      </div>
      <div className="flex items-center justify-between border-b pb-3">
        <div className="flex items-center space-x-2">
          <img src="/flag.svg" alt="flag" />
          <h1>{team}</h1>
        </div>
        <h1 className="p-2 bg-slate-300 text-black rounded-lg">{role}</h1>
      </div>
      <div className="flex items-center justify-between">
        <h1>Batting style</h1>
        <h1>{batting_style}</h1>
      </div>
      <div className="flex items-center justify-between">
        <h1>Price: {price}</h1>
        <button
          className="px-3 py-1 border rounded-lg hover:bg-slate-500 hover:text-white"
          onClick={() => handleIncreaseSelectedPlayers(player)}
        >
          Choose Player
        </button>
      </div>
    </div>
  );
};

export default SinglePlayer;
