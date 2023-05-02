import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Starred from "./components/Starred";
import "./css/style.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <h1 style={{ textAlign: "center", marginTop: "2rem", fontSize: "2.5rem" }}>Box Office</h1>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/starred" element={<Starred/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
