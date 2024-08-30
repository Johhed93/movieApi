import "./Favourites.css"

import Button from "../components/buttons/Button"
import ShowMovie from "../components/ShowMovie"
const Favourites= ({favourites, setNewFavourites })=>{

return(
    <main className="center-content">
    {favourites.length<0 ? (
<div className="flex">
        <h1>Du har inga favoriter en.</h1>
        <Button classname={"btn1"} text={"Gå tillbaka"}/>
        </div>
    ): 
    (
        <div className="flex">
        <h1>Mina favoriter</h1>
        <div className="item-holder">
        {favourites.map((movie, index)=>(
        <ShowMovie key={index} movie={movie} setNewFavourites={setNewFavourites} favourites={favourites}/>
        ))}
        </div>
        </div>
    )

    }
    </main>
)
}
export default Favourites