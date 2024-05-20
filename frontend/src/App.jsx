import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import SignUpLogin from "./pages/SignupLogin";

function App() {
  return (
    <>
      <Header />
      <SignupLogin />
      <Routes>
        <Route path="/" element={<SignUpLogin />} />
      </Routes>
      <NavBar />
    </>
  );
}

export default App;
