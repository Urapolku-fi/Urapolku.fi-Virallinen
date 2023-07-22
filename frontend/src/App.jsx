import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import { NavBarLayout } from "./components/NavLayout";

function App() {
  return (
    <BrowserRouter>
      <NavBarLayout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </NavBarLayout>
    </BrowserRouter>
  );
}

export default App;
