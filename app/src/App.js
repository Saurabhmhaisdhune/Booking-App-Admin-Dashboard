import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from "./main/Main";
import AddHotel from "./hotels/AddHotel";
import UpdateHotel from "./hotels/UpdateHotel";
import AddUser from "./users/AddUser";
import AddRoom from "./hotels/AddRoom";
import Login from "./login/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/addHotel" element={<AddHotel />} />
          <Route path="/addUser" element={<AddUser />} />
          <Route path="/edithotel/:id" element={<UpdateHotel />} />
          <Route path="/addroom/:id" element={<AddRoom />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
