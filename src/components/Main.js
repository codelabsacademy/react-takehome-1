import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
import useFetchData from "../hooks/useFetchData";

export default function Main() {
  const { mixed } = useContext(DataContext);
  console.log(mixed); // Returns 21 entries only (check useFetchData.js return statement to check how array.splice() was used for this)

  return <div>Main</div>;
}
