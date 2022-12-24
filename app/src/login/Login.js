import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const initialValue = {
  username: undefined,
  password: undefined,
};

const Login = () => {
  const [hotelData, setHotelData] = useState(initialValue);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setHotelData({ ...hotelData, [e.target.id]: e.target.value });
  };

  const handleSubmit = () => {
    axios
      .post(
        "http://localhost:8000/api/admin/adminlogin",
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
    <div className="background">
      <div className="login">
        <div className="lContainer">
          <p className="head-line">Login</p>
          <input
            type="text"
            placeholder="username"
            name="username"
            onChange={handleChange}
            className="lInput"
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={handleChange}
            className="lInput"
          />
          <button onClick={handleSubmit} className="lButton">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
