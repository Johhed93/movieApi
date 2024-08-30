import {Link} from "react-router-dom"
const Navbar=()=>{
    const links= [{
    to:"/",
    name:"Home"
    },
    {
        to:"/Favourites",
        name:"Favoriter"
    },{
        to:"/MyPage",
        name:"Min sida"
    }
]
return(
  <header>
    <nav>
        <div>Hejhej</div>
        <ul>
            {links.map((link, index)=>(
                <li key={index}>
                    <Link to={link.to}>{link.name}</Link>
                </li>
            ))}
        </ul>
    </nav>
  </header>
)
}
export default Navbar