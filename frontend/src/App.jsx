import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";

import SignupLogin from "./pages/SignupLogin";
import SignUpForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import Preferences from "./components/Preferences";
import OwnProfile from "./pages/OwnProfile";

import UserProfile from "./pages/UserProfile";
import Homepage from "./pages/Homepage";
import HelpListView from "./pages/HelpListView";
import MapPage from "./pages/MapPage";
import RequestHelp from "./pages/RequestHelp";
import HelpView from "./pages/HelpView";
import OwnHelpList from "./pages/OwnHelpList";
import OwnOfferedHelp from "./pages/OwnOfferedHelp";

import UserProvider from "./contexts/User";

function App() {
  return (
    <>
      <UserProvider>
        <Header />
        <Routes>
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/" element={<LoginForm />} />
          <Route path="/preferences" element={<Preferences />} />
          <Route path="/profile" element={<OwnProfile />} />

          <Route path="/user/:user_id" element={<UserProfile />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/helpListView" element={<HelpListView />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/helpListView/:help_request_id" element={<HelpView />} />
          <Route path="/helpListView/:user_id" element={<OwnHelpList />} />
          <Route path="/ownOfferedHelp" element={<OwnOfferedHelp />} />
          <Route path="/requestHelp" element={<RequestHelp />} />
        </Routes>
        <NavBar />
      </UserProvider>
    </>
  );
}

export default App;
