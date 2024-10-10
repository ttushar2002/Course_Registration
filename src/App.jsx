import React from "react";
import Slogin from "./Student/Slogin";
import { Routes, Route } from "react-router-dom";
import Flogin from "./Faculty/Flogin";
import Alogin from "./Admin/Alogin";
import ASidebar from "./Admin/ASidebar";
import SDetails from "./Admin/SDetails";
import SRegister from "./Student/SRegister";
import FDetails from "./Admin/FDetails";
import AddCourse from "./Admin/AddCourse";
import RemoveCourse from "./Admin/RemoveCourse";

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
        <Route path="/FDetails" element={<FDetails />} />
        <Route path="/AddCourse" element={<AddCourse />} />
        <Route path="/RemoveCourse" element={<RemoveCourse />} />
      </Routes>
    </>
  );
};

export default App;
