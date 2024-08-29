import "./ShowMovie.css";
const ShowMovie = ({ movie }) => {
  return (
    <div className="container">
      <div className="bg-image"></div>
        <div className="card">
          <img src={movie.thumb_url} />
        </div>
        <div className="card">
        <h2>{movie.name}</h2>
        <p>Actors: {movie.actors.map((actor, index)=>`${actor}, `)}</p>
        <p>Year: {movie.year}</p>
        <p>Rating: {movie.rating}⭐</p>
        <p></p>
        </div>
      
    </div>
  );
};
export default ShowMovie;
