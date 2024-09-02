import ShowMovie from "../components/ShowMovie";
import "./Home.css"
import { useEffect, useState } from "react";
const Home = ({movies, favourites,setNewFavourites}) => {
  const [userSelection, setUserSelection]= useState([])
  useEffect(()=>{
  const sortByRating = movies.sort((a,b)=> b.rating- a.rating)
  setUserSelection(sortByRating)
  }, [])

  return( 
   <div className="home-container">
  <div className="movie-holder">
    {userSelection.map((movie, index)=>{
     {return <ShowMovie key={index} movie={movie} setNewFavourites={setNewFavourites} favourites={favourites}/>}
    })}

  </div>
  </div> 
  )
};
export default Home;
