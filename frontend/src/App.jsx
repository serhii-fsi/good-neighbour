import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import SignupLogin from "./pages/SignupLogin";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <>
      <Header />
      <SignupLogin />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      <NavBar />
    </>
  );
}

export default App;
