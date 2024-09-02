import ShowMovie from "../components/ShowMovie";
import "./Home.css";
import { useEffect, useState } from "react";
import CategoryButton from "../components/buttons/Categori-button";
const Home = ({ movies, favourites, setNewFavourites }) => {
  const [userSelection, setUserSelection] = useState([]);
  useEffect(() => {
    const sortByRating = [...movies].sort((a, b) => b.rating - a.rating);
    setUserSelection(sortByRating);
  }, []);
  const sortNewToOld = () => {
    const sortToNewest = [...movies].sort((a, b) => a.year - b.year);
    setUserSelection(sortToNewest);
  };
  const findAllGenres= Array.from(new Set(movies.map((allMovies=>allMovies.genre.map(genre=>genre))).flat()));
  console.log(findAllGenres)
  return (
    <div className="home-container">
      <h1>Välkommen till min film-sida</h1>
      <div className="button-container">
        <CategoryButton onclick={sortNewToOld} text={"hej"} />
      </div>
      <div className="movie-holder">
        {userSelection.map((movie, index) => (
          <ShowMovie
            key={index}
            movie={movie}
            setNewFavourites={setNewFavourites}
            favourites={favourites}
          />
        ))}
      </div>
    </div>
  );
};
export default Home;
