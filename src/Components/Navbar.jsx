import React from "react";
import { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";


const Navbar = () => {
  console.log(Link);
  const { login, isAuth, token , logout,handleColor,color } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    
    <nav className = {color==="light"? "navbar navbar-expand-lg navbar-light bg-light" : "navbar navbar-expand-lg navbar-dark bg-dark"} >
      {/* <a to="/">{isAuth?"Logout":"Login"}</a> */}

      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li onClick={isAuth ? logout:null} className="nav-item">
              <Link className="nav-link" to="/login">
                {isAuth ? "Logout" : "Login"}
              </Link>
             
            </li>
            <h5>{isAuth? token : 'User is not authenticated yet' }</h5>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <div class="form-check form-switch">
  <input onClick={handleColor} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" for="flexSwitchCheckDefault">Light</label>
</div>
        </div>
      </div>
    </nav>
    
  );
};

export default Navbar;
