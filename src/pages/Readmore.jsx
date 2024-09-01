import "./Favourites.css"
import { useParams } from "react-router-dom";
import ShowMore from "../components/showMore";
const ReadMore = ({movies, favourites, setNewFavourites})=>{
    const place= useParams();
    const selectedMovie= movies.filter((movie)=>movie.name===place.name)
    return (
        <main className="center-content flex">
            <>
            {selectedMovie.map((movie, index)=>(
            <ShowMore key={index} movie={movie} setNewFavourites={setNewFavourites} favourites={favourites} movies={movies}/>
            ))}
            </>
        </main>
    )
}
export default ReadMore