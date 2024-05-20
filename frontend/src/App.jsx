import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import SignupLogin from "./pages/SignupLogin";
import Homepage from "./pages/Homepage";

import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<Homepage />} />
        <Route path="/" element={<SignupLogin />} />
        <Route path="/signup" element={<SignupForm /> } />
        <Route path="/login" element={<LoginForm /> }  />
      </Routes>
      <NavBar />
    </>
  );
}

export default App;
