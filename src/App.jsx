import "./App.css";
import Home from "./Components/Home";
import WeatherDetails from "./Components/WeatherDetail";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather/:city" element={<WeatherDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
