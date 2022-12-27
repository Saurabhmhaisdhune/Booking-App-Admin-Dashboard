import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./updateHotel.css";

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
export default function UpdateHotel() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [hotelData, setHotelData] = useState(initialValue);
  const handleChange = (e) => {
    setHotelData({ ...hotelData, [e.target.name]: e.target.value });
  };

  const getdata = () => {
    fetch("https://booking-app-p324.onrender.com/api/hotels/find/" + id)
      .then((responce) => responce.json())
      .then((data) => {
        setHotelData(data);
      });
  };
  useEffect(() => {
    getdata();
  }, []);

  const handleSubmit = () => {
    axios
      .put(
        "https://booking-app-p324.onrender.com/api/hotels/" + id,
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
      <p className="headline">Update Hotel</p>
      <div className="center-div">
        <div className="add-hotel">
          <input
            type="text"
            value={hotelData.name}
            onChange={handleChange}
            name="name"
            placeholder="Enter hotel name"
          />

          <input
            type="text"
            value={hotelData.type}
            onChange={handleChange}
            name="type"
            placeholder="Enter you email"
          />

          <input
            type="text"
            value={hotelData.city}
            onChange={handleChange}
            name="city"
            placeholder="Enter city"
          />

          <input
            type="text"
            value={hotelData.address}
            onChange={handleChange}
            name="address"
            placeholder="Enter address"
          />

          <input
            type="text"
            value={hotelData.distance}
            onChange={handleChange}
            name="distance"
            placeholder="Enter distance"
          />

          <input
            type="text"
            value={hotelData.photos}
            onChange={handleChange}
            name="photos"
            placeholder="Enter photo link"
          />

          <input
            type="text"
            value={hotelData.title}
            onChange={handleChange}
            name="title"
            placeholder="Enter title"
          />

          <input
            type="text"
            value={hotelData.desc}
            onChange={handleChange}
            name="desc"
            placeholder="Enter description"
          />

          <input
            type="number"
            value={hotelData.cheapestPrice}
            onChange={handleChange}
            name="cheapestPrice"
            placeholder="Enter price"
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
              navigate("/home");
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
