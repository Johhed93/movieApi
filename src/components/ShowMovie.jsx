import Button from "./buttons/Button";
import "./ShowMovie.css";
const ShowMovie = ({ movie }) => {

  return (
    <div className="container">
      <div className="bg-image"></div>
      <img src={movie.thumb_url} />
      <div className="card">
        <h2>{movie.name}</h2>
        <p>Year: {movie.year}</p>
        <p>Rating: {movie.rating}⭐</p>
        <div className="button-container">
          <Button text={"Les mer"} classname={"btn2"} />
          <Button text={"Legg till"} classname={"btn1"} />
        </div>
      </div>
    </div>
  );
};
export default ShowMovie;
