import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className="header__wrapper">
      {props.back ? (
        <Link to="/">
          {" "}
          <div className="header__wrapper-btn">Back</div>
        </Link>
      ) : (
        <Link to="/">
          {" "}
          <div className="header__wrapper-btn">Dashboard</div>
        </Link>
      )}
    </div>
  );
}

export default Header;
