import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

let initialValue = {
  username: "",
  email: "",
  country: "",
  city: "",
  phone: "",
  password: "",
};
export default function AddUser() {
  const [userData, setUserData] = useState(initialValue);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    axios
      .post(
        "https://booking-app-p324.onrender.com/api/auth/register",
        JSON.stringify(userData),
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      )
      .then(() => setUserData(initialValue));
    navigate("/");
  };

  return (
    <>
      <h1 className="headline">Add New User</h1>
      <div className="center-div">
        <div className="add-hotel">
          <input
            type="text"
            onChange={handleChange}
            name="username"
            placeholder="Enter Username"
          />

          <input
            type="email"
            onChange={handleChange}
            name="email"
            placeholder="Enter you email"
          />

          <input
            type="text"
            onChange={handleChange}
            name="country"
            placeholder="Enter country"
          />

          <input
            type="text"
            onChange={handleChange}
            name="city"
            placeholder="Enter city"
          />

          <input
            type="number"
            onChange={handleChange}
            name="phone"
            placeholder="Enter phone number"
          />

          <input
            type="password"
            onChange={handleChange}
            name="password"
            placeholder="Enter password"
          />

          <button type="button" onClick={handleSubmit} className="add-btn">
            Submit
          </button>
          <button
            type="button"
            onClick={() => {
              navigate("/");
            }}
            className="cancal-btn"
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}
