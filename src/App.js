import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Movies from "./components/Movies";
import Series from "./components/Series";
import Layout from "./components/Layout";
import MoviesLayout from "./components/MoviesLayout";
import useFetchData from "./hooks/useFetchData";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route element={<MoviesLayout />}>
            <Route path="/movies" element={<Movies />} />
          </Route>
          <Route path="/series" element={<Series />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
