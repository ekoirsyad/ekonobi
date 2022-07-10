import {useEffect, useMemo, useState} from 'react';
import listService, {Coin} from '~services/list';

/**
 * Custom Hooks For List Screen
 * @returns {data, query, setQuery}
 */
const useCoins = () => {
  const [coins, setCoins] = useState<Coin[]>([]);

  const [query, setQuery] = useState<string>('');

  const data = useMemo(() => {
    if (query.length > 0) {
      const qLower = query.toLowerCase();
      return coins.filter(coin => coin.ticker.toLowerCase().includes(qLower));
    }
    return coins;
  }, [coins, query]);

  const fetchCoins = async () => {
    await listService()
      .then(res => {
        setCoins(res);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  return {data, query, setQuery};
};

export default useCoins;
