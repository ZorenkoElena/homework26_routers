import { useEffect, useState } from 'react';
import axios from 'axios';

const useAxiosHero = (id) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    axios
      .get(`character/${id}`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
        console.log('useAxiosHero', res.data);
      })
      .catch((err) => {
        setError(err);
        console.log('useAxiosHeroError', err);
      });
  }, [id]);
  return { data, loading, error };
};

export default useAxiosHero;
