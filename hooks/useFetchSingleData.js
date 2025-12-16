import { useEffect, useState } from "react";
import { fetchData } from "../api";
export const useFetchSingleData = ({ link }) => {
  const [fetching, setFetching] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    const onFetchData = async () => {
      try {
        const response = await fetchData(link);

        setData(response);
      } catch (error) {
        console.log(error);
      } finally {
        setFetching(false);
      }
    };
    onFetchData();
  }, [link]);

  return { fetching, data };
};
