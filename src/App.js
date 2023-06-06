import "./App.css";
import { Route, Routes } from "react-router-dom";
import StarRating from "./components/StarRating";
import Welcome from "./components/Welcome";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/star" element={<StarRating />} />
        <Route path="*" element={<Welcome />} />
      </Routes>
    </>
  );
}

export default App;
