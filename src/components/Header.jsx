import "../scss/components/Header.scss";
import {Link} from "react-router-dom";
import ukFlag from "../images/uk_flag.png";
import Navbar from "./Navbar";


function Header() {

  const onHoverHamburgerMenu = () => {
    
  }

  return (
    <header className="headerContainer">
        <section className="headerContainer__titlesContainer">
            <h1 className="headerContainer__titlesContainer--mainTitle">
              <Link to="/">
              Gatos de Ogíjares <i className="fa-solid fa-heart"></i> 
              </Link>
              </h1>
            <h2 className="headerContainer__titlesContainer--subtitle">Street angels</h2>
        </section>
        

        {/* <Navbar /> */}
        <section className="headerContainer__menuContainer">
        <Navbar />
          {/* <i className="headerContainer__menuContainer--hamburgerMenu fa-solid fa-bars" onHover={onHoverHamburgerMenu}></i>      */}
        </section>
       
        {/* <section className="headerContainer__menuContainer">
            <ul className="headerContainer__menuContainer--menu">
              <li className="menuElement menuElementFlag">
                  <img className="menuElementFlag__flag" src={ukFlag} alt="usa-flag"/>
                    English
                  <i className="menuElementFlag__flagArrow fa-solid fa-angle-down"></i>
              </li>
              <li className="menuElement">
                <Link to="/homepage#meet-the-cats">
                  Meet the cats
                </Link>
              </li>
              <li className="menuElement">Mission</li>
              <li className="menuElement">Goals</li>
              <li className="menuElement">
                <Link to="/stations">
                  Stations
                </Link>
              </li>
              <li className="menuElement">Support</li>
              <li className="menuElement">
                <Link to="/transparency">
                  Transparency
                </Link>
              </li>
              <li className="menuElement">
                <Link to="/the-story">
                  The Story
                </Link>
              </li>
              <li className="menuElement">
                <Link to="/contact">
                Contact
                </Link>
              </li>
              
                
            </ul>
        </section> */}
    </header>
  );
}

export default Header;