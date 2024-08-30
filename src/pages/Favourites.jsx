import "./Favourites.css"

import Button from "../components/buttons/Button"
import ShowMovie from "../components/ShowMovie"
import { useNavigate } from "react-router-dom"
const Favourites= ({favourites, setNewFavourites })=>{
const navigate= useNavigate();
const returnToHomePage = ()=>{
    navigate("/")
}

return(
    <main className="center-content">
    {favourites.length>0 ? 
    (
        <div className="flex">
        <h1>Mina favoriter</h1>
        <div className="item-holder">
        {favourites.map((movie, index)=>(
        <ShowMovie key={index} movie={movie} setNewFavourites={setNewFavourites} favourites={favourites}/>
        ))}
        </div>
        </div>
    ):
    (
        <div className="flex no-info">
            <h1>Du har inga favoriter än.</h1>
            <div className="bg-blur"></div>
            <Button classname={"btn1"} text={"Hitta nya filmer"} func={returnToHomePage}/>
            </div>
        )
    }
    </main>
)
}
export default Favourites