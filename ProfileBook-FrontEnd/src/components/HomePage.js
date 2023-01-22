import React from "react";

import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="style">
      <div>
        <nav
          class="navbar navbar-lightblue bg-lightblue"
          style={{ display: "-ms-flexbox" }}
        >
          <div style={{ marginLeft: "190px" }}>
            {" "}
            <Link to="/login" className="btn btn-info">
              <b>USER LOGIN</b>
            </Link>{" "}
          </div>
          <br></br>
          <div style={{ marginLeft: "-160px", fontFamily: "Arial Black" }}>
            <h1>PROFILE BOOK</h1>
          </div>
          <div style={{ marginRight: "200px" }}>
            {" "}
            <Link to="/adminlogin" className="btn btn-info">
              <b>ADMIN LOGIN</b>
            </Link>{" "}
          </div>
        </nav>
      </div>

      <div className="login"></div>
    </div>
  );
}
