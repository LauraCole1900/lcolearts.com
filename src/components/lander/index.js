import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Typed from "typed.js"
import "./style.css";

const LandingText = () => {
  const location = useLocation();

  useEffect(() => {
    const options = {
      strings: [
        "LAURA COLE",
        "WEB DEVELOPER",
        "MUSICIAN",
        "MARTIAL ARTIST",
        "CLICK TO ENTER"
      ],
      typeSpeed: 75,
      backSpeed: 50
    };
    const typed = new Typed(".texts", options)

    return () => {
      typed.destroy();
    }
  }, [])

  return (
    <div>
      <Link to="/LauraECole/about" className={location.pathname === "/LauraECole/about" ? "mylogo active" : "mylogo"}>
        <section className="texts"></section>
      </Link>
    </div>
  )
};

export default LandingText;