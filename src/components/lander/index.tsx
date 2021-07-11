import React, { ReactElement, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Typed from "typed.js"
import "./style.css";

const LandingText = (): ReactElement => {
  const location = useLocation();

  useEffect(() => {
    const options = {
      strings: [
        "LAURA COLE",
        "WEB DEVELOPER",
        "MUSICIAN",
        "MARTIAL ARTIST",
        "CLICK TO ENTER^1500"
      ],
      typeSpeed: 75,
      backSpeed: 50,
      loop: true,
      showCursor: false
    };
    const typed = new Typed(".texts", options)

    return () => {
      typed.destroy();
    }
  }, [])

  return (
    <div>
      <Link to="/about" className={location.pathname === "/about" ? "mylogo active" : "mylogo"}>
        <section className="texts"></section>
      </Link>
    </div>
  )
};

export default LandingText;