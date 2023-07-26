import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import { NavBarLayout } from "./components/NavLayout";
import {
  Auth0Provider,
  withAuthenticationRequired as withAuth,
} from "@auth0/auth0-react";
import CallbackPage from "./components/Auth0Callback";
import LandingPage from "./components/pages/Landing";

function App() {
  return (
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENTID}
      authorizationParams={{
        redirect_uri: import.meta.env.VITE_AUTH0_CALLBACK_URL,
      }}
      audience={import.meta.env.VITE_AUTH0_AUDIENCE}
      useRefreshTokens={true}
      cacheLocation="localstorage"
    >
      <BrowserRouter>
        <NavBarLayout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/callback" element={<CallbackPage />} />
            <Route
              path="/landing"
              Component={withAuth(LandingPage, { returnTo: "/" })}
            />
          </Routes>
        </NavBarLayout>
      </BrowserRouter>
    </Auth0Provider>
  );
}

export default App;
