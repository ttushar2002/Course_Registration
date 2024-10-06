import React from "react";
import Slogin from "./Student/Slogin";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/Slogin" element={<Slogin />} />
      </Routes>
    </>
  );
};

export default App;
