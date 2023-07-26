import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import { NavBarLayout } from "./components/NavLayout";
import { Auth0Provider } from "@auth0/auth0-react";

function App() {
  return (
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENTID}
      authorizationParams={{
        redirect_uri: import.meta.env.VITE_AUTH0_CALLBACK_URL,
      }}
    >
      <BrowserRouter>
        <NavBarLayout>
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </NavBarLayout>
      </BrowserRouter>
    </Auth0Provider>
  );
}

export default App;
