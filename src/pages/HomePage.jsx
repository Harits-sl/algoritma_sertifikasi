import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div style={{ width: "80vw", margin: "auto" }}>
      <h1 style={{ textAlign: "center" }}>Menu Pilihan</h1>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Link to="/input-angka">
          <button>Input Angka</button>
        </Link>
        <Link to="/sorting">
          <button>sorting</button>
        </Link>
        <Link to="/searching">
          <button>searching</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
