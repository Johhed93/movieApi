import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  const links = [
    {
      to: "/",
      name: "Home",
    },
    {
      to: "/Favourites",
      name: "Favoriter",
    },
    {
      to: "/MyPage",
      name: "Min sida",
    },
  ];
  return (
    <header>
      <nav>
        <div className="logo-container">
          <img
            className="logo"
            src="https://cdn.pixabay.com/photo/2015/12/09/22/24/filmklappe-1085692_1280.png"
            alt="logo"
          />
          <span>Movie api</span>
        </div>
        <ul className="navigation-list">
          {links.map((link, index) => (
            <li key={index}>
              <Link className="navigation-link" to={link.to}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
