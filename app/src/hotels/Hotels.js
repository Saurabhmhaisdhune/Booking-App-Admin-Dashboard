import { useEffect, useState } from "react";
import "./hotels.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AddHotel from "./AddHotel";

function Hotels() {
  const navigate = useNavigate();
  const [student, setStudent] = useState([]);
  const [show, setShow] = useState(false);

  const getData = () => {
    fetch("https://booking-app-p324.onrender.com/api/hotels")
      .then((response) => response.json())
      .then((data) => setStudent(data));
  };

  const handleDelete = (_id) => {
    axios
      .delete("https://booking-app-p324.onrender.com/api/hotels/" + _id)
      .then((data) => getData());
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {show ? (
        <AddHotel setShow={setShow} getData={getData}/>
      ) : (
    <div className="hotel-page">
      <p className="headline">List of all available hotels</p>
      <table>
        <tbody>
        <tr className="table-header">
          <th>Sr.no</th>
          <th>Name</th>
          <th>Type</th>
          <th>City</th>
          <th>Address</th>
          <th>Distance</th>
          <th>Title</th>
          <th>Description</th>
          <th>Price</th>
          <th>Room</th>
          <th>Actions</th>
        </tr>
        </tbody>
        <tbody>
        {student.map((value, index) => {
          return (
            <tr key={value._id}>
              <td>{index + 1}</td>
              <td>{value.name}</td>
              <td>{value.type}</td>
              <td>{value.city}</td>
              <td>{value.address}</td>
              <td>{value.distance}</td>
              <td>{value.title}</td>
              <td>{value.desc}</td>
              <td>{value.cheapestPrice}</td>
              <td><button
                  type="button"
                  className="addroom-btn"
                  onClick={() => navigate("/addroom/" + value._id)}
                >
                  Add room
                </button></td>
              <td>
                <button
                  type="button"
                  className="update-btn"
                  onClick={() => navigate("/edithotel/" + value._id)}
                >
                  Update
                </button>
                <button
                  type="button"
                  className="delete-btn"
                  onClick={() => handleDelete(value._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
              </tbody>

      </table>
      <button className="create-btn" onClick={() => setShow(true)}>
        Add New Hotel
      </button>
    </div>
      )}
      </>
  );
}

export default Hotels;
