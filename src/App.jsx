import React from "react";
import Slogin from "./Student/Slogin";
import { Routes, Route } from "react-router-dom";
import Flogin from "./Faculty/Flogin";
import Alogin from "./Admin/Alogin";

const App = () => {
  return (
    <>
      <Routes>

        {/* Student */}
        <Route path="/Slogin" element={<Slogin />} />

        {/* Faculty */}
        <Route path="/Flogin" element={<Flogin />} />

        {/* Admin */}
        <Route path="/Alogin" element={<Alogin />} />

      </Routes>
    </>
  );
};

export default App;
