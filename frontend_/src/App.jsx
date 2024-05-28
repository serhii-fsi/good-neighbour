import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import OfferHelpPage from "./pages/OfferHelpPage";
import RequestCreatePage from "./pages/RequestCreatePage";
import RequestEditPage from "./pages/RequestEditPage";
import RequestPage from "./pages/RequestPage";
import MyOffersPage from "./pages/MyOffersPage";
import MyRequestsPage from "./pages/MyRequestsPage";
import SignUpPage from "./pages/SignUpPage";
import UserProfileEditPage from "./pages/UserProfileEditPage";
import UserProfilePage from "./pages/UserProfilePage";
import Page404 from "./pages/Page404";

import { useAuth } from "./hooks/useAuth";

import { AuthContext } from "./context/auth-context";
import { HelpTypesProvider } from "./context/help-types";

import config from "./config.json";

function App() {
    const { routes } = config;
    const { isLoggedIn, user, login, logout } = useAuth();

    return (
        <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
            <HelpTypesProvider>
                <Routes>
                    <Route path={routes.offerHelpRootPage.path} element={<Page404 />} />
                    <Route path={routes.offerHelpPage.path} element={<OfferHelpPage />} />
                    <Route path={routes.requestCreatePage.path} element={<RequestCreatePage />} />
                    <Route path={routes.requestEditPage.path} element={<RequestEditPage />} />
                    <Route path={routes.requestPage.path} element={<RequestPage />} />
                    <Route path={routes.myOffersPage.path} element={<MyOffersPage />} />
                    <Route path={routes.myRequestsPage.path} element={<MyRequestsPage />} />
                    <Route path={routes.signUpPage.path} element={<SignUpPage />} />
                    <Route
                        path={routes.userProfileEditPage.path}
                        element={<UserProfileEditPage />}
                    />
                    <Route path={routes.userProfilePage.path} element={<UserProfilePage />} />

                    <Route path={"*"} element={<Page404 />} />
                </Routes>
            </HelpTypesProvider>
        </AuthContext.Provider>
    );
}

export default App;
