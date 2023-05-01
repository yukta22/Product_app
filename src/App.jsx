import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/electronics"
          element={<Product category="electronics" />}
        ></Route>
        <Route
          path="/jewelery"
          element={<Product category="jewelery" />}
        ></Route>
        <Route
          path="/men's clothing"
          element={<Product category="men's clothing" />}
        ></Route>

        <Route
          path="/women's clothing"
          element={<Product category="women's clothing" />}
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </>
  );
}

export default App;
