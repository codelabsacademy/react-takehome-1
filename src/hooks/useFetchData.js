import { useEffect, useState } from "react";
import FetchData from "../helpers/FetchData";

function useFetchData() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const allData = await FetchData();
    setData(allData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return data;
}

export default useFetchData;
