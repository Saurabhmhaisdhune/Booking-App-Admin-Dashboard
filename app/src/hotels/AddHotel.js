import axios from "axios";
import React, { useState } from "react";
import "./addhotel.css";
import { useNavigate } from "react-router-dom";

let initialValue = {
  name: "",
  type: "",
  city: "",
  address: "",
  distance: "",
  photos: "",
  title: "",
  desc: "",
  cheapestPrice: "",
};
export default function AddHotel() {
  const [hotelData, setHotelData] = useState(initialValue);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setHotelData({ ...hotelData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    axios
      .post("https://booking-app-p324.onrender.com/api/hotels", JSON.stringify(hotelData), {
        headers: {
          "Content-type": "application/json",
        },
      })
      .then(() => setHotelData(initialValue));
    navigate("/");
  };

  return (
    <>
      <h1 className="headline">Add New Hotel</h1>
      <div className="center-div">
        <div className="add-hotel">
          <input
            type="text"
            onChange={handleChange}
            name="name"
            placeholder="Enter hotel name"
            required
          />

          <input
            type="text"
            onChange={handleChange}
            name="type"
            placeholder="Enter you type"
            required
          />

          <input
            type="text"
            onChange={handleChange}
            name="city"
            placeholder="Enter city"
            required
          />

          <input
            type="text"
            onChange={handleChange}
            name="address"
            placeholder="Enter address"
            required
          />

          <input
            type="text"
            onChange={handleChange}
            name="distance"
            placeholder="Enter distance"
            required
          />

          <input
            type="url"
            onChange={handleChange}
            name="photos"
            placeholder="Enter photo link"
            required
          />

          <input
            type="text"
            onChange={handleChange}
            name="title"
            placeholder="Enter title"
            required
          />

          <input
            type="text"
            onChange={handleChange}
            name="desc"
            placeholder="Enter description"
            required
          />

          <input
            type="number"
            onChange={handleChange}
            name="cheapestPrice"
            placeholder="Enter price"
            required
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
