import "./App.css";
import { Route, Routes } from "react-router-dom";
import StarRating from "./components/css-items/StarRating/StarRating";
import Welcome from "./components/Welcome";
import FormHook from "./components/formHook";
import GoogleLoader from "./components/css-items/GoogleLoader/GoogleLoader";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/star" element={<StarRating />} />
        <Route path="/formHook" element={<FormHook />} />
        <Route path="/g-loader" element={<GoogleLoader />} />
        <Route path="*" element={<Welcome />} />
      </Routes>
    </>
  );
}

export default App;
