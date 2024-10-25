import React, { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import AlertAddMoreCoins from "./components/alerts/AlertAddMoreCoins";
import Footer from "./components/footer/Footer";

function App() {
  const [coins, setCoins] = useState(0);
  const [players, setPlayers] = useState([]);
  const [addMoreCoinsAlert, setAddMoreCoinsAlert] = useState(false);

  useEffect(() => {
    fetch("/players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  const addMoreCoins = () => {
    setCoins((c) => c + 1000000);
    setAddMoreCoinsAlert((c) => !c);
  };

  const handleBuyPlayer = (price) => setCoins((c) => c - price);

  return (
    <div>
      <div className="max-w-screen-2xl mx-auto">
        <Header coins={coins} addMoreCoins={addMoreCoins} />
        <Body
          players={players}
          coins={coins}
          handleBuyPlayer={handleBuyPlayer}
        />
        {addMoreCoinsAlert && (
          <AlertAddMoreCoins setAddMoreCoinsAlert={setAddMoreCoinsAlert} />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
