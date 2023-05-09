import Error from "./components/Error";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Show from "./components/Show";
import Starred from "./components/Starred";
import "./css/style.css"
import { Routes, Route, HashRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route path="/" element={<Home />} />
              <Route path="/starred" element={<Starred />} />
            </Route>
            <Route path="*" element={<Error />} />
            <Route path="/show/:showId" element={<Show />} />
          </Routes>
        </Hash>
      </QueryClientProvider>
    </>
  );
}

export default App;
