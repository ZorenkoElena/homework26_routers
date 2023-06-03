import { useEffect, useState } from 'react';
import axios from 'axios';

const useAxiosEpisodes = (page) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    axios
      .get(`episode/?page=${page}`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, [page]);

  return { data, loading, error };
};

export default useAxiosEpisodes;
