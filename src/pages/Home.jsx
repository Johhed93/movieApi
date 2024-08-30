import ShowMovie from "../components/ShowMovie";
import "./Home.css"
const Home = ({movies, favourites,setNewFavourites}) => {
 
  return( <div className="home-container">
    {movies.map((movie, index)=>{
     {return <ShowMovie key={index} movie={movie} setNewFavourites={setNewFavourites} favourites={favourites}/>}
    })}
  
  </div>
  )
};
export default Home;
