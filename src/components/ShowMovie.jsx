import Button from "./buttons/Button";
import { useState } from "react";
import "./ShowMovie.css";
import { Link, useParams } from "react-router-dom";
const ShowMovie = ({ movie, favourites,setNewFavourites }) => {
  const addToFavourites = () => {
    setNewFavourites((prevState) => [...prevState, movie]);
  };
  const removeFromFavourites = ()=>{
    const updatedList= favourites.filter(favourite=> favourite.name !== movie.name)
    setNewFavourites(updatedList)
  }
const location= useParams();

  const isInFavourites= favourites.some(favourite=>favourite.name===movie.name)
  return (
    <div className="container">
      <div className="bg-image"></div>
      <img src={movie.thumb_url} className="thumb-nail"/>
      <div className="card">
        <h2>{movie.name}</h2>
        <p>Year: {movie.year}</p>
        <p>Rating: {movie.rating}⭐</p>
        <div className="button-container">
          {location!==movie.name ? ( <Link className={"btn2"} to={`/Movies/${movie.name}`}>Les mer</Link>) : (<></>)
          }
          
          {!isInFavourites ? (<Button text={"Legg till"} classname={"btn1"} func={addToFavourites} />)
          : 
          (<Button text={"Ta bort"} classname={"btn1"} func={removeFromFavourites} />)
          }
          
        </div>
      </div>
    </div>
  );
};
export default ShowMovie;
