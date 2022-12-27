import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AddUser from "./AddUser";

function App() {
  const navigate = useNavigate();
  const [student, setStudent] = useState([]);
  const [show, setShow] = useState(false);

  const getData = async () => {
    await fetch("https://booking-app-p324.onrender.com/api/users")
      .then((response) => response.json())
      .then((data) => setStudent(data));
  };

  const handleDelete = (_id) => {
    axios
      .delete("https://booking-app-p324.onrender.com/api/users/" + _id)
      .then((data) => getData());
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {show ? (
        <AddUser />
      ) : (
        <div className="hotel-page">
          <p className="headline">List of all Register Users</p>
          <table>
            <tbody>
              <tr className="table-header">
                <th>Sr.no</th>
                <th>Name</th>
                <th>Email</th>
                <th>Country</th>
                <th>City</th>
                <th>Phone Number</th>
                <th>Password</th>
                <th>Admin</th>
                <th>Actions</th>
              </tr>
            </tbody>
            <tbody>
              {student?.map((value, index) => {
                return (
                  <tr key={value._id}>
                    <td>{index + 1}</td>
                    <td>{value.username}</td>
                    <td>{value.email}</td>
                    <td>{value.country}</td>
                    <td>{value.city}</td>
                    <td>{value.phone}</td>
                    <td>##########</td>
                    {value.isAdmin === true ? (
                      <>
                        <td>true</td>
                      </>
                    ) : (
                      <td>false</td>
                    )}
                    <td>
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
            Add New User
          </button>
        </div>
      )}
    </>
  );
}

export default App;
