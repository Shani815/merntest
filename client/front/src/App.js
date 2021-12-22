import React from "react";
import "./App.css";
import Signup from "./Signup";
import Signin from "./Signin";
import { Route, Routes, BrowserRouter, useNavigate } from "react-router-dom";
import Book from "./Book";
import AddBook from "./AddBook";
import Auth from "./Auth";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Addbook" element={<AddBook />} />

        <Route path="/book" element={<Book />} />
      </Routes>

      {/* qazw12324 */}
    </>
  );
}

export default App;
