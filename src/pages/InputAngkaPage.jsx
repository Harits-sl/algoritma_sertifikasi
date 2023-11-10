import React, { useState } from "react";
import { Link } from "react-router-dom";

const InputAngkaPage = ({ handleChangeArrAngka }) => {
  const [jumlahAngka, setJumlahAngka] = useState(0);
  const [arrAngka, setArrAngka] = useState([]);

  const handleInputTotalnumber = (event) => {
    setJumlahAngka(event.target.value);
  };

  const handlePushAngka = (event) => {
    // ketika key tab ditekan
    if (event.key === "Tab") {
      setArrAngka([...arrAngka, event.target.value]);
    }
  };

  const InputAngka = () => {
    const input = [];
    for (let i = 1; i <= jumlahAngka; i++) {
      input.push(
        <>
          <p>angka {i}</p>
          <input
            type="text"
            id={`input-${i}`}
            style={{ display: "block" }}
            onKeyDown={handlePushAngka}
          />
        </>
      );
    }
    return input;
  };

  return (
    <>
      {console.log(arrAngka)}
      <div style={{ width: "80vw", margin: "auto" }}>
        <h1 style={{ textAlign: "center" }}>Input Angka</h1>
        <p>Angka yang di input {arrAngka.join(", ")}</p>
        <p>
          Masukan Jumlah Nilai tugas:
          <input type="text" onChange={handleInputTotalnumber} />
          {jumlahAngka !== 0 && InputAngka()}
        </p>
        <Link to="/">
          <button type="submit" onClick={() => handleChangeArrAngka(arrAngka)}>
            Submit
          </button>
        </Link>
      </div>
    </>
  );
};

export default InputAngkaPage;
