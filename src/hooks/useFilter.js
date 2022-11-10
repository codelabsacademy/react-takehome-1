import React, { useEffect, useState } from "react";

export default function useFilter(data) {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [mixed, setMixed] = useState([]);

  useEffect(() => {
    let movies = data.filter((item) => item["programType"] === "movie");
    setMovies(movies);

    let series = data.filter((item) => item["programType"] === "series");
    setSeries(series);

    let mixed = data.slice(0, 21);
    setMixed(mixed)
  }, [data]);

  return { movies, series, mixed };
}
