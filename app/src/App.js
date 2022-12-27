import React from "react";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Main from "./main/Main";
import UpdateHotel from "./hotels/UpdateHotel";
import AddRoom from "./hotels/AddRoom";
import Login from "./login/Login";
import ProtectedRoute from "./login/ProtectedRoute";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Main />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<Navigate replace to="/login" />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/edithotel/:id" element={<UpdateHotel />} />
          <Route path="/addroom/:id" element={<AddRoom />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
