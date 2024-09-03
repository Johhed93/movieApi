import ShowMovie from "../components/ShowMovie";
import "./Home.css";
import { useEffect, useState } from "react";
import CategoryButton from "../components/buttons/Category-button";
const Home = ({ movies, favourites, setNewFavourites }) => {
  const [userSelection, setUserSelection] = useState([]);
  const [categorys, setCategorys]= useState([])
  
  useEffect(() => {
    const sortByRating = [...movies].sort((a, b) => b.rating - a.rating);
    setUserSelection(sortByRating);
    countOccurrences()
  }, []);
  
  const sortNewToOld = () => {
    const sortToNewest = [...movies].sort((a, b) => a.year - b.year);
    setUserSelection(sortToNewest);
  };
  const countOccurrences=()=>{
    const findAllGenres= movies.map((allMovies)=> allMovies.genre.map(genre=> genre)).flat()
    let count= {}
    for (let i = 0; i < findAllGenres.length; i++) {
      const element = findAllGenres[i];
      count[element] = (count[element] || 0) + 1;
    }
    const genreToArray= Object.keys(count).map(genre => ({
      genre: genre,
      count: count[genre]
    }));
    const highToLow= genreToArray.sort((a,b)=> b.count-a.count);
    const popular= highToLow.slice(0,7);
    setCategorys(popular)
  }
  const filterMovieGenre = (genre)=>{
    const result= movies.filter((genres)=>genres.genre.includes(genre))
    const sortLowToHigh=[...result].sort((a,b)=> b.rating-a.rating)
    setUserSelection(sortLowToHigh)
    }
  
  return (
    <div className="home-container">
      <h1 className="h1-tag">Populära kategorier</h1>
      <div className="category-container">
        {categorys.map((category, index)=>(
        <CategoryButton key={index} onclick={()=>filterMovieGenre(category.genre)} text={category.genre} />
        ))

        }
        
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
