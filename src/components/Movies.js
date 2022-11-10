import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";

export default function Movies() {
  const { movies } = useContext(DataContext);

  console.log(movies);

  return <div>Movies</div>;
}
