import "./ShowMovie.css";
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
            <div className="bg-image"></div>
            <img src={movie.image_url} />
            <div className="card">
              <h2>{movie.name}</h2>
              <p>Year: {movie.year}</p>
              <p>Rating: {movie.rating}⭐</p>
              <div className="button-container">
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