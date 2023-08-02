import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup"
import { NavBarLayout } from "./components/NavLayout";
import ProfileCompletionOne from "./components/pages/ProfileCompletionOne";
import ProfileCompletionTwo from "./components/pages/ProfileCompletionTwo";
import ProfileCompletionThree from "./components/pages/ProfileCompletionThree";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBarLayout><Home /></NavBarLayout>} />
        <Route path="/login" element={<NavBarLayout><Login /></NavBarLayout>} />
        <Route path="/register" element={<NavBarLayout><Signup /></NavBarLayout>} />
        <Route path="/profileone" element={<ProfileCompletionOne />} />
        <Route path="/profiletwo" element={<ProfileCompletionTwo />} />
        <Route path="/profilethree" element={<ProfileCompletionThree />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;