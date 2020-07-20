import React from "react";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <Link to="/">
          {" "}
          <div className="sidebar__title">Form Builder</div>
        </Link>
        <div className="sidebar__nav">
          <Link to="/">
            {" "}
            <div className="sidebar__nav-value">Forms</div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
