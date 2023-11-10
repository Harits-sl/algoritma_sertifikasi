import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import InputAngkaPage from "./pages/InputAngkaPage";
import { useState } from "react";
import SortingPage from "./pages/SortingPage";
import SearchingPage from "./pages/SearchingPage";

function App() {
  const [arrAngka, setArrAngka] = useState([]);

  const handleChangeArrAngka = (angka) => {
    setArrAngka(angka);
  };

  return (
    <>
      {console.log(arrAngka)}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/input-angka"
          element={
            <InputAngkaPage handleChangeArrAngka={handleChangeArrAngka} />
          }
        />
        <Route path="/sorting" element={<SortingPage arrAngka={arrAngka} />} />
        <Route
          path="/searching"
          element={<SearchingPage arrAngka={arrAngka} />}
        />
      </Routes>
    </>
  );
}

export default App;
