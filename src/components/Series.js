import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";

export default function Series() {
  const { series } = useContext(DataContext);
  
  console.log(series);

  return (
    <div>
      <h3>Series</h3>
    </div>
  );
}
