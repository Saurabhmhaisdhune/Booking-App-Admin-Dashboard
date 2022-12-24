import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Hotels from "../hotels/Hotels";
import Users from "../users/Users";
import "./main.css";

function Main() {
  const [show, setShow] = useState(true);
  const handleClick = () => {
    setShow(true);
  };
  const handleClicks = () => {
    setShow(false);
  };
  return (
    <div className="main-sidebar">
      <div className="main">
        <h1 className="main-centers">Admin Dashboard</h1>
        <p className="main-center1" onClick={handleClick}>Hotels</p>
        <p className="main-center2" onClick={handleClicks}>Users</p>
      </div>
      <div>{show ? <Hotels /> : <Users />}</div>
    </div>
  );
}

export default Main;
