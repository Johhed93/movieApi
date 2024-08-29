import "./App.css";
import { Route, Router, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import fetchData from "./api/FetchData";
import { useState, useEffect } from "react";
const App = () => {
  const [movies, setNewMovies] = useState([]);
  const [isLoading, setLoading]= useState(false)
  useEffect(() => {
    fetchData({ setMovies: setNewMovies })
    console.log(movies)
    setLoading(true)
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home movies={movies}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
