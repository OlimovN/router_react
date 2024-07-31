import React from "react";
import { Route, Routes, Link, NavLink } from "react-router-dom";
import Home from "./pages/HomePage";
import Details from "./pages/Details";
import Error from "./pages/ErrorPage";

function App() {
  return (
    <div >
      <header style={{ display: "flex", flexDirection: "column",gap: "10px" }}>
         <NavLink to="/">Home sahifasiga o'tish</NavLink>
        <NavLink to="/about">About sahifasiga o'tish</NavLink>
        <NavLink to="/contact">Contact sahifasiga o'tish</NavLink>
        <NavLink to="/products">Products sahifasiga o'tish</NavLink>
        <NavLink to="/products/1">Product 1 sahifasiga o'tish</NavLink>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
