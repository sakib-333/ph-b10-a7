import React, { useState } from "react";
import Header from "./components/header/Header";

function App() {
  const [coins, setCoins] = useState(0);

  const addMoreCoins = () => setCoins((c) => c + 1000000);

  return (
    <div className="max-w-screen-2xl mx-auto">
      <Header coins={coins} addMoreCoins={addMoreCoins} />
    </div>
  );
}

export default App;
