import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import SignupLogin from "./pages/SignupLogin";
import Homepage from "./pages/Homepage";
import SignUpForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import MapPage from "./pages/MapPage";
import HelpRequest from "./pages/HelpRequest";
import OwnHelpList from "./pages/OwnHelpList";
import OwnHelpOffered from "./pages/OwnHelpOffered";
import OwnProfile from "./pages/OwnProfile";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<SignupLogin />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/helpRequest" element={<HelpRequest />} />
        <Route path="/ownHelplist" element={<OwnHelpList />} />
        <Route path="/ownHelpOffered" element={<OwnHelpOffered />} />
        <Route path="/profile" element={<OwnProfile />} />
      </Routes>
      <NavBar />
    </>
  );
}

export default App;
