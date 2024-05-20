import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import SignupLogin from "./pages/SignupLogin";

function App() {
  return (
    <>
      <Header />
      <SignupLogin />
      <Routes>
        <Route></Route>
      </Routes>
    </>
  );
}

export default App;
