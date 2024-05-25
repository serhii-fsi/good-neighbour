import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import OfferHelpPage from "./pages/OfferHelpPage";
import HelpRequestCreatePage from "./pages/HelpRequestCreatePage";
import HelpRequestEditPage from "./pages/HelpRequestEditPage";
import HelpRequestPage from "./pages/HelpRequestPage";
import MyHelpOffersPage from "./pages/MyHelpOffersPage";
import MyHelpRequestsPage from "./pages/MyHelpRequestsPage";
import SignUpPage from "./pages/SignUpPage";
import UserProfileEditPage from "./pages/UserProfileEditPage";
import UserProfilePage from "./pages/UserProfilePage";
import Page404 from "./pages/Page404";

import { AuthContext } from "./context/auth-context";
import { useAuth } from "./hooks/useAuth";

import config from "./config.json";

function App() {
    const { routes } = config;
    const { isLoggedIn, user, login, logout } = useAuth();

    return (
        <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
            <Routes>
                <Route path={routes.offerHelpRootPage.path} element={<Page404 />} />
                <Route path={routes.offerHelpPage.path} element={<OfferHelpPage />} />
                <Route
                    path={routes.helpRequestCreatePage.path}
                    element={<HelpRequestCreatePage />}
                />
                <Route path={routes.helpRequestEditPage.path} element={<HelpRequestEditPage />} />
                <Route path={routes.helpRequestPage.path} element={<HelpRequestPage />} />
                <Route path={routes.myHelpOffersPage.path} element={<MyHelpOffersPage />} />
                <Route path={routes.myHelpRequestsPage.path} element={<MyHelpRequestsPage />} />
                <Route path={routes.signUpPage.path} element={<SignUpPage />} />
                <Route path={routes.userProfileEditPage.path} element={<UserProfileEditPage />} />
                <Route path={routes.userProfilePage.path} element={<UserProfilePage />} />

                <Route path={"*"} element={<Page404 />} />
            </Routes>
        </AuthContext.Provider>
    );
}

export default App;
