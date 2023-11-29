import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CryptoData = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/coins/markets',
          {
            params: {
              vs_currency: 'usd',
              ids: 'bitcoin,ethereum,ripple',
              order: 'market_cap_desc',
              per_page: 3,
              page: 1,
              sparkline: false,
            },
          }
        );
        setCryptoData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data: ', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Crypto Data</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {cryptoData.map((crypto) => (
            <li key={crypto.id}>
              <img src={crypto.image} alt={crypto.name} width="30" height="30" />
              {crypto.name} ({crypto.symbol}) - ${crypto.current_price}
              <br />
              Market Cap: ${crypto.market_cap.toLocaleString()}
              <br />
              Circulating Supply: {crypto.circulating_supply.toLocaleString()}{' '}
              {crypto.symbol}
              <br />
              Volume (24h): ${crypto.total_volume.toLocaleString()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CryptoData;
