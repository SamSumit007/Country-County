import "./App.css";
import { AddCity } from "./components/AddCity";
import { AddCountry } from "./components/AddCountry";
import { Homepage } from "./components/Homepage";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/add-city" element={<AddCity />}></Route>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/add-country" element={<AddCountry />}></Route>
      </Routes>
    </div>
  );
}

export default App;
