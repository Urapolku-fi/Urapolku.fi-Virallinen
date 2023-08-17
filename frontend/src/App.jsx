import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import { NavBarLayout } from "./components/NavLayout";
import ProfileCompletionOne from "./components/pages/ProfileCompletionOne";
import ProfileCompletionTwo from "./components/pages/ProfileCompletionTwo";
import ProfileCompletionThree from "./components/pages/ProfileCompletionThree";
import Dashboard from "./components/pages/Dashboard";
import {
  Auth0Provider,
  withAuthenticationRequired as withAuth,
} from "@auth0/auth0-react";
import CallbackPage from "./components/Auth0Callback";

function App() {
  return (
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENTID}
      authorizationParams={{
        redirect_uri: import.meta.env.VITE_AUTH0_CALLBACK_URL,
        audience: import.meta.env.VITE_AUTH0_AUDIENCE,
      }}
      useRefreshTokens={true}
      cacheLocation="localstorage"
    >
      <BrowserRouter>
        <NavBarLayout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/callback" element={<CallbackPage />} />
            <Route
              path="/profileone"
              Component={withAuth(ProfileCompletionOne)}
            />
            <Route
              path="/profiletwo"
              Component={withAuth(ProfileCompletionTwo)}
            />
            <Route
              path="/profilethree"
              Component={withAuth(ProfileCompletionThree)}
            />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </NavBarLayout>
      </BrowserRouter>
    </Auth0Provider>
  );
}

export default App;
