import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../homePage/HomePage";
import "./layout.css";

function Pages() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default Pages;
