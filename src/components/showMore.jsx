import "./ShowMore.css";
import Button from "./buttons/Button";
import { useEffect, useState } from "react";
const ShowMore = ({ movie, favourites, setNewFavourites, movies }) => {
  const [similarMovies, setSimilarMovies] = useState([]);
  const addToFavourites = () => {
    setNewFavourites((prevState) => [...prevState, movie]);
  };
  const removeFromFavourites = () => {
    const updatedList = favourites.filter((favourite) => favourite.name !== movie.name);
    setNewFavourites(updatedList);
  };
  const isInFavourites = favourites.some((favourite) => favourite.name === movie.name);
  useEffect(()=>{
  findSimilarMovies()
  }, [])
  const findSimilarMovies = () => {
    const pointsToSimilarites = movies.map((allmovies) => {
      const genreScore = allmovies.genre.reduce(
        (acc, genre) => acc + (movie.genre.includes(genre) ? 1 : 0),
        0
      );
      const actorScore = allmovies.actors.reduce(
        (acc, actor) => acc + (movie.actors.includes(actor) ? 2 : 0),
        0
      );
      const directorScore = allmovies.directors.reduce(
        (acc, director) => acc + (movie.directors.includes(director) ? 1 : 0),
        0
      );
      const totalScore = genreScore + actorScore + directorScore;
      return { ...allmovies, similarityScore: totalScore };
    });
    const sortByMatch = pointsToSimilarites.sort((a,b)=>{
      return b.similarityScore-a.similarityScore
    })
    setSimilarMovies(sortByMatch)
  };
  
  return (
    <div className="content-container">
      <div className="info-container">
        <div className="bg-image1"></div>
        <div className="bg-image2"></div>
        <div className="bg-image3"></div>
        <img src={movie.image_url} className="image" />
        <div className="info">
          <div className="text-container">
            <h2>{movie.name}</h2>
            <p>
              Genre: <i>{movie.genre.join(" ")}</i>
            </p>
            <p>
              Year: <i>{movie.year}</i>
            </p>
            <p>
              Authour: <i>{movie.directors}</i>
            </p>
            <p>Actors: {movie.actors.join(" ")}</p>
            <p>
              Description: <i>{movie.desc}</i>
            </p>
          </div>
          <div className="button-container">
            <p>Rating: {movie.rating}⭐</p>
            {!isInFavourites ? (
              <Button text={"Legg till"} classname={"btn3"} func={addToFavourites} />
            ) : (
              <Button text={"Ta bort"} classname={"btn3"} func={removeFromFavourites} />
            )}
          </div>
        </div>
      </div>
      <h3>Liknande titlar</h3>
    </div>
  );
};
export default ShowMore;
