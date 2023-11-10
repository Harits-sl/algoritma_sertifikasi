import React, { useState } from "react";

const SearchingPage = ({ arrAngka }) => {
  const [inputAngka, setInputAngka] = useState(null);
  const [hasil, setHasil] = useState();

  const search = () => {
    setHasil(
      arrAngka.find((angka) => {
        return angka === inputAngka;
      })
    );
  };

  const handleChange = (event) => {
    setInputAngka(event.target.value);
  };

  return (
    <div style={{ width: "80vw", margin: "auto" }}>
      {console.log(arrAngka)}
      {console.log(hasil)}
      <h1 style={{ textAlign: "center" }}>Tampil Hasil Searching</h1>
      Masukan Angka yang dicari
      <input type="text" onChange={handleChange} />
      <button onClick={search}>Cari</button>
      <p>{hasil !== undefined ? hasil : "Angka tidak ditemukan"}</p>
    </div>
  );
};

export default SearchingPage;
