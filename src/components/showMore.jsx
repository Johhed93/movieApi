import "./ShowMore.css";
import Button from "./buttons/Button";
const ShowMore = ({movie, favourites,setNewFavourites})=>{
    
        const addToFavourites = () => {
          setNewFavourites((prevState) => [...prevState, movie]);
        };
        const removeFromFavourites = ()=>{
          const updatedList= favourites.filter(favourite=> favourite.name !== movie.name)
          setNewFavourites(updatedList)
        }  
        const isInFavourites= favourites.some(favourite=>favourite.name===movie.name)
        return (
          <div className="container">
            <div className="bg-image1"></div>
            <div className="bg-image2"></div>
            <div className="bg-image3"></div>
            <img src={movie.image_url} className="image" />
            <div className="info">
              <div className="text-container">
              <h2>{movie.name}</h2>
              <p>Genre: <i>{movie.genre.join(" ")}</i></p>
              <p>Year: <i>{movie.year}</i></p>
              <p>Authour: <i>{movie.directors}</i></p>
              <p>Actors: {movie.actors.join(" ")}</p>
              <p>Description: <i>{movie.desc}</i></p>
              </div>
              <div className="button-container">
              <p>Rating: {movie.rating}⭐</p>
                {!isInFavourites ? (<Button text={"Legg till"} classname={"btn1"} func={addToFavourites} />)
                : 
                (<Button text={"Ta bort"} classname={"btn1"} func={removeFromFavourites} />)
                }
                
              </div>
            </div>
          </div>
        );
      };
export default ShowMore