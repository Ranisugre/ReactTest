import React from "react";
import AddEvents from "./AddEvents";
import ShowEvents from "./ShowEvents";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/add" element={<AddEvents />}></Route>
        <Route path="/show" element={<ShowEvents />}></Route>
      </Routes>
    </>
  );
};
export default App;
