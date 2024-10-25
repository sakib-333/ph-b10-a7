import React, { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Body from "./components/body/Body";

function App() {
  const [coins, setCoins] = useState(0);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("/players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  const addMoreCoins = () => setCoins((c) => c + 1000000);

  const handleBuyPlayer = (price) => setCoins((c) => c - price);

  return (
    <div className="max-w-screen-2xl mx-auto">
      <Header coins={coins} addMoreCoins={addMoreCoins} />
      <Body players={players} coins={coins} handleBuyPlayer={handleBuyPlayer} />
    </div>
  );
}

export default App;
