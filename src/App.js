import { useEffect, useState } from "react";

function App() {

  const [coin, setCoin] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.coinpaprika.com/v1/tickers`)
      .then((response) => response.json())
      .then((json) => {
        setCoin(json);
        setIsLoading(false);
      });
    console.log(coin);
  },[]);

  return (
    <div>
      <h1>Hi,Coins!</h1>
      <select>
        {coin.map((oneCoin) => (
          <option key={oneCoin.id}>{oneCoin.name} ({oneCoin.symbol}): ${oneCoin.quotes.USD.price} USD</option>))}
      </select>
      </div>
  );
}

export default App;
