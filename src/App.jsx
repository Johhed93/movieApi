import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import fetchData from "./api/FetchData";
import Favourites from "./pages/Favourites";
import { useState, useEffect } from "react";
import MyPage from "./pages/MyPage";
import Navbar from "./components/Navbar";
import ReadMore from "./pages/Readmore";
const App = () => {
  const [movies, setNewMovies] = useState([]);
  const[favourites, setNewFavourites]= useState([])
  useEffect(() => {
    fetchData({ setMovies: setNewMovies })
  }, []);

  return (
    <>
    
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home movies={movies} setNewFavourites={setNewFavourites} favourites={favourites}/>} />
          <Route path="/Favourites" element={<Favourites favourites={favourites} setNewFavourites={setNewFavourites}/>}></Route>
          <Route path="/MyPage" element={<MyPage/>}></Route>
          <Route path="/Movies/:name" element={<ReadMore/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
