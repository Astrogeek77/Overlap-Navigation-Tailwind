import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

function layout({ component }) {
  return (
    <div>
      <Navbar />
      <Header />
      {component}
    </div>
  );
}

export default layout;
