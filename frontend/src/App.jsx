import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup"
import { NavBarLayout } from "./components/NavLayout";

function App() {
  return (
    <BrowserRouter>
      <NavBarLayout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
        </Routes>
      </NavBarLayout>
    </BrowserRouter>
  );
}

export default App;
