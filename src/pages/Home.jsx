import ShowMovie from "../components/ShowMovie";
import "./Home.css"
const Home = ({movies}) => {
  const newArray= movies.find((_,index)=>index===0)
  console.log(newArray)
  return( <div className="home-container">
    {movies.map((movie, index)=>{
     {return <ShowMovie key={index} movie={movie}/>}
    })}
  
  </div>
  )
};
export default Home;
