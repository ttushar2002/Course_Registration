import React from "react";
import Slogin from "./Student/Slogin";
import { Routes, Route } from "react-router-dom";
import Flogin from "./Faculty/Flogin";
import Alogin from "./Admin/Alogin";
import SDetails from "./Admin/SDetails";
import ASidebar from "./Admin/ASidebar";
import SRegister from "./Student/SRegister";

const App = () => {
  return (
    <>
      <Routes>
        {/* Student */}
        <Route path="/Slogin" element={<Slogin />} />
        <Route path="/SRegister" element={<SRegister />} />

        {/* Faculty */}
        <Route path="/Flogin" element={<Flogin />} />

        {/* Admin */}
        <Route path="/Alogin" element={<Alogin />} />
        <Route path="/ASidebar" element={<ASidebar />} />
        <Route path="/SDetails" element={<SDetails />} />
      </Routes>
    </>
  );
};

export default App;
