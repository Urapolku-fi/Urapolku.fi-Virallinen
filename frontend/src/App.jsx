import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup"
import { NavBarLayout } from "./components/NavLayout";
import ProfileCompletionOne from "./components/pages/ProfileCompletionOne";
import ProfileCompletionTwo from "./components/pages/ProfileCompletionTwo";

function App() {
  return (
    <BrowserRouter>
      <NavBarLayout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/profileone" element={<ProfileCompletionOne />} />
          <Route path="/profiletwo" element={<ProfileCompletionTwo />} />
        </Routes>
      </NavBarLayout>
    </BrowserRouter>
  );
}

export default App;
