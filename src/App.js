import Error from "./components/Error";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Show from "./components/Show";
import Starred from "./components/Starred";
import "./css/style.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="/" element={<Home />} />
            <Route path="/starred" element={<Starred />} />
          </Route>
          <Route path="*" element={<Error />} />
          <Route path="/show/:showId" element={<Show />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
