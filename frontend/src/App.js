import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import AdminPanel from "./components/AdminPanel";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
        <Routes>
          <Route path="/" element={<Login />}></Route>
        </Routes>
        <Routes>
          <Route path="/admin-panel" element={<AdminPanel/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
