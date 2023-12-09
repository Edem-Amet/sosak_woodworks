import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse} from '@fortawesome/free-solid-svg-icons'
import { faCircleInfo} from '@fortawesome/free-solid-svg-icons'
import { faUser} from '@fortawesome/free-solid-svg-icons'
import { faTag} from '@fortawesome/free-solid-svg-icons'
import { faPhone} from '@fortawesome/free-solid-svg-icons'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faClipboard} from '@fortawesome/free-solid-svg-icons'
/*
import { faShare} from '@fortawesome/free-solid-svg-icons'
import { faBookmark} from '@fortawesome/free-solid-svg-icons'
import { faBook} from '@fortawesome/free-solid-svg-icons'
import { faGlobe} from '@fortawesome/free-solid-svg-icons'
*/


const Header = () => {
  return (
    <div className='headie'>
      <nav className="navbar navbar-expand-lg">
        <div className="container">

        <a className="navbar-brand fs-4" href="#Home">Sosak WoodWorks</a>
        <li className="nav-item mx-2 ">
                  <Link to="/src/components/home.js" className="nav-link homesymbol"><FontAwesomeIcon icon={faHouse} /> Home |</Link>
                </li>
          <button className="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className=" navbar-toggler-icon"></span>
            

          </button>
          <div className="sidebar offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header border-bottom">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Sosak WoodWorks</h5>
              <li className="nav-item mx-2">
                  <Link to="/src/components/home.js" className="nav-link homesymbol"><FontAwesomeIcon icon={faHouse} /> Home  </Link>
                </li>
              <button type="button" className="btn-close shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body d-flex flex-column flex-lg-row">
              <ul className="navbar-nav justify-content-center align-items-center fs-6 flex-grow-1 pe-3">

                <li className="nav-item mx-2">
                  <Link to="/src/components/about.js" className="nav-link"><FontAwesomeIcon icon={faCircleInfo} />  About | </Link>
                </li>
                <li className="nav-item mx-2">
                  <Link to="/src/components/products.js" className="nav-link"><FontAwesomeIcon icon={faClipboard} />  Products | </Link>
                </li>
                <li className="nav-item mx-2">
                  <Link to="/src/components/services.js" className="nav-link"><FontAwesomeIcon icon={faTag} /> Services | </Link>
                </li>
                <li className="nav-item mx-2">
                  <Link to="/src/components/contact.js" className="nav-link"><FontAwesomeIcon icon={faUser} /> Contact | </Link>
                </li>
              </ul>
              <div className='d-flex flex-lg-row mx-3 flex-column justify-content-center align-items-center center-gap-3'>
                <a href='call'><button className='btnn mx-2 my-2'><FontAwesomeIcon icon={faPhone} /> Call Us</button></a>
                <a href='email'><button className='btnn mx-2 my-2'><FontAwesomeIcon icon={faEnvelope} /> Email</button></a>

              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>

  );
};


export default Header;
