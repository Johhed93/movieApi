import "./Favourites.css"
import { useParams } from "react-router-dom";
import ShowMore from "../components/showMore";
const ReadMore = ({movies, favourites, setNewFavourites})=>{
    const place= useParams();
    const selectedMovie= movies.filter((movie)=>movie.name===place.name)
    return (
        <main className="center-content flex">
            <h1>Les mer om</h1>
            <div>
            {selectedMovie.map((movie, index)=>(
            <ShowMore key={index} movie={movie} setNewFavourites={setNewFavourites} favourites={favourites}/>
            ))}
            </div>
        </main>
    )
}
export default ReadMore