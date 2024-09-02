import "./ShowMore.css";
import Button from "./buttons/Button";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
  useEffect(() => {
    findSimilarMovies();
  }, [movie]);
  const findSimilarMovies = () => {
    const pointsToSimilarites = movies.map((allMovies) => {
      const genreScore = allMovies.genre.reduce(
        (acc, genre) => acc + (movie.genre.includes(genre) ? 1 : 0),
        0
      );
      const actorScore = allMovies.actors.reduce(
        (acc, actor) => acc + (movie.actors.includes(actor) ? 2 : 0),
        0
      );
      const directorScore = allMovies.directors.reduce(
        (acc, director) => acc + (movie.directors.includes(director) ? 1 : 0),
        0
      );
      const yearScore = Math.abs(allMovies.year-movie.year) <= 10 ? 1:0;
      const totalScore = genreScore + actorScore + directorScore + yearScore;
      return { ...allMovies, similarityScore: totalScore };
    });
    const sortByMatch = pointsToSimilarites.sort((a, b) => {
      return b.similarityScore - a.similarityScore;
    });
    const filterWithoutMovieOnPage = sortByMatch.filter((mov) => mov.name !== movie.name);
    const displayMovies= filterWithoutMovieOnPage.slice(0,5)
    setSimilarMovies(displayMovies);
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
            <p>Actors: <i>{movie.actors.join(" ")}</i></p>
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
      <div className="similar">
        <h3>Liknande titlar</h3>
        <div className="similar-movies">
          {similarMovies.map((m, index) => {
            return (
              <Link key={index} to={`/Movies/${m.name}`} className="movie-link">
                <img src={m.thumb_url} alt="" className="thumb"></img>
                {index===0 ? (<span className="best-match">Best match</span>): (<></>)}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default ShowMore;
