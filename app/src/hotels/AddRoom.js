import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./updateHotel.css";

let initialValue = {
  title: "",
  desc: "",
  price: "",
  maxPeople: "",
  roomNumbers: "",
};
export default function Editdetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  const [hotelData, setHotelData] = useState(initialValue);
  const handleChange = (e) => {
    setHotelData({ ...hotelData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    axios
      .post(
        "https://booking-app-p324.onrender.com/api/rooms/" + id,
        JSON.stringify(hotelData),
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      )
      .then(() => setHotelData(initialValue));
    navigate("/");
  };

  return (
    <>
      <p className="headline">Add Rooms</p>
      <div className="center-div">
        <div className="add-hotel">
          <input
            type="text"
            onChange={handleChange}
            name="title"
            placeholder="Enter title"
          />

          <input
            type="text"
            onChange={handleChange}
            name="desc"
            placeholder="Enter room description"
          />

          <input
            type="text"
            onChange={handleChange}
            name="price"
            placeholder="Enter room price"
          />

          <input
            type="number"
            onChange={handleChange}
            name="maxPeople"
            placeholder="Enter address"
          />

          <input
            type="text"
            onChange={handleChange}
            name="roomNumbers"
            placeholder="Enter room number"
          />

          <button
            className="update-button"
            type="button"
            onClick={handleSubmit}
            id="updatebtn"
          >
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
