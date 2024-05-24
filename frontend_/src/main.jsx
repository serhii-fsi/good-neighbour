import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./main.css";

import OfferHelpPage from "./pages/OfferHelpPage.jsx";
import HelpRequestCreatePage from "./pages/HelpRequestCreatePage.jsx";
import HelpRequestEditPage from "./pages/HelpRequestEditPage.jsx";
import HelpRequestPage from "./pages/HelpRequestPage.jsx";
import MyHelpOffersPage from "./pages/MyHelpOffersPage.jsx";
import MyHelpRequestsPage from "./pages/MyHelpRequestsPage.jsx";
import UserProfileCreatePage from "./pages/UserProfileCreatePage.jsx";
import UserProfileEditPage from "./pages/UserProfileEditPage.jsx";
import UserProfilePage from "./pages/UserProfilePage.jsx";
import Page404 from "./pages/Page404.jsx";

import config from "./config.json";
const { routes } = config;

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <Routes>
            <Route path={routes.offerHelpRootPage.path} element={<OfferHelpPage />} />
            <Route path={routes.offerHelpPage.path} element={<OfferHelpPage />} />
            <Route path={routes.helpRequestCreatePage.path} element={<HelpRequestCreatePage />} />
            <Route path={routes.helpRequestEditPage.path} element={<HelpRequestEditPage />} />
            <Route path={routes.helpRequestPage.path} element={<HelpRequestPage />} />
            <Route path={routes.myHelpOffersPage.path} element={<MyHelpOffersPage />} />
            <Route path={routes.myHelpRequestsPage.path} element={<MyHelpRequestsPage />} />
            <Route path={routes.userProfileCreatePage.path} element={<UserProfileCreatePage />} />
            <Route path={routes.userProfileEditPage.path} element={<UserProfileEditPage />} />
            <Route path={routes.userProfilePage.path} element={<UserProfilePage />} />
            <Route path={"*"} element={<Page404 />} />
        </Routes>
    </BrowserRouter>
);
