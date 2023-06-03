import { useEffect, useState } from 'react';
import axios from 'axios';

const useAxiosHeroes = (page) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    axios
      .get(`character/?page=${page}`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
        console.log('useAxiosHeroesRes', res.data);
      })
      .catch((err) => {
        setError(err);
        console.log('useAxiosHeroesError', err);
      });
  }, [page]);

  return { data, loading, error };
};

export default useAxiosHeroes;
