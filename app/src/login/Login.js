import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const initialValue = {
  username: "",
  password: "",
};

const Login = () => {
  const [hotelData, setHotelData] = useState(initialValue);
  const [show, setShow] = useState(false);
  const [btn, setbtn] = useState(false);

  const handleCredendials = () => {
    setShow((prev) => !prev);
    setbtn((prev) => !prev);
  };

  const navigate = useNavigate();

  const handleChange = (e) => {
    setHotelData({ ...hotelData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    axios
      .post(
        "https://booking-app-p324.onrender.com/api/admin/adminlogin",
        JSON.stringify(hotelData),
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      )
      .then((res) => {
        localStorage.setItem("token",res.data.token)
        navigate("/home");
      });

  };

  return (
    <div className="background">
      <div className="login">
        <div className="lContainer">
          <p className="head-line">Admin Login</p>
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
          <div className="login-p">
            Click{" "}
            <span className="login-here" onClick={handleCredendials}>
              here
            </span>{" "}
            to {btn ? "hide" : "see"} Admin Credentials
            {show ? (
              <p>
                Username: demoAdmin <br /> Password: demoAdmin123
              </p>
            ) : (
              <p>***********</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
