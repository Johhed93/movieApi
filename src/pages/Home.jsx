import ShowMovie from "../components/ShowMovie";
import "./Home.css"
const Home = ({movies}) => {
  const newArray= movies.find((_,index)=>index===0)
  console.log(newArray)
  return <div className="home-container">

   {<ShowMovie movie={newArray}/>}
  </div>;
};
export default Home;
