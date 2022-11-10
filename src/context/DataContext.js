import { createContext, useState } from "react";
import useFetchData from "../hooks/useFetchData";
import useFilter from "../hooks/useFilter";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  // Define the shared data
  const data = useFetchData();
  const { movies, series, mixed } = useFilter(data);

  return (
    <DataContext.Provider value={{ movies, series, mixed }}>
      {children}
    </DataContext.Provider>
  );
};
