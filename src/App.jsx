import "./App.css";
import { Route, Router, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import fetchData from "./api/FetchData";
import { useState, useEffect } from "react";
const App = () => {
  const [movies, setNewMovies] = useState([]);
  useEffect(() => {
    fetchData({ setMovies: setNewMovies })
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home movie={movies}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
