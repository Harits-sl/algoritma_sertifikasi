import React from "react";

const SortingPage = ({ arrAngka }) => {
  const sorting = () => {
    return arrAngka.sort(function (a, b) {
      return a - b;
    });
  };
  return (
    <div style={{ width: "80vw", margin: "auto" }}>
      <h1 style={{ textAlign: "center" }}>Input Angka</h1>
      <p>Tampil Hasil Sorting</p>
      <p>Hasil Sorting: {sorting().join(", ")}</p>
    </div>
  );
};

export default SortingPage;
