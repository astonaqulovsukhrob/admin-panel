import React from "react";
import Navbar from "./Components/layout/Navbar";
import { ToastContainer } from "react-toastify";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
    </div>
  );
}

export default App;
