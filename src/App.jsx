import "./App.css";
import { Route, Router, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import fetchData from "./api/FetchData";
import Favourites from "./pages/Favourites";
import { useState, useEffect } from "react";
import MyPage from "./pages/MyPage";
import Navbar from "./components/Navbar";
const App = () => {
  const [movies, setNewMovies] = useState([]);
  useEffect(() => {
    fetchData({ setMovies: setNewMovies })
    console.log(movies)
  }, []);

  return (
    <>
    <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home movies={movies}/>} />
          <Route path="/Favourites" element={<Favourites/>}></Route>
          <Route path="/MyPage" element={<MyPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
