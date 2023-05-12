import "./Header.css";
import React, { useContext } from "react";
import "./Header.css";
import logo from "../../Images/evangadi-logo-home.png";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
function Header1({ logout }) {
  const [userData, setUserData] = useContext(UserContext);
  const navigate = useNavigate();

  const goToSignIn = (e) => {
    e.preventDefault();
    if (userData.user) {
      logout();
    }
    navigate("/login");
  };

  function drop() {
    var x = document.getElementById("myLinks");
    if (x.classList.contains("show")) {
      x.classList.remove("show");
    } else {
      x.classList.add("show");
    }
  }

  return (
    <>
      <div className="header container-fluid">
        <div className="innerContainer container d-flex justify-content-around ">
          <Link to="/" className="header__image">
            <img src={logo} alt="Evangadi logo" />
          </Link>
          <button onClick={drop} className="ic d-sm-block d-md-none">
            ☰
          </button>

          <div className="d-flex  innerContainer2 justify-content-between d-none  d-md-block">
            <Link to="/">Home</Link>
            <Link to="/">How it Works</Link>
            <button onClick={goToSignIn} className="btn_header">
              {userData.user ? "LogOut" : "SIGN IN"}
            </button>
          </div>
        </div>
      </div>

      <div
        className="d-block  justify-content-between  d-md-none"
        id="myLinks"
      >
        <div className="d-md-none">
          <Link to="/">Home</Link>
        </div>
        <hr className="d-md-none"/>
        <div className="d-md-none">
          <Link to="/">How it Works</Link>
        </div>
        <hr className="d-md-none"/>
        <div onClick={goToSignIn} className="d-md-none btn_header">
         <Link to='/'> {userData.user ? "LogOut" : "SIGN IN"} </Link>
        </div>
        
      </div>
    </>
  );
}

export default Header1;
