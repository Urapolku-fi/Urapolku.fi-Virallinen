import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Browse from './components/pages/Browse';
import { NavBarLayout } from './components/NavLayout';
import ProfileCompletionOne from './components/pages/ProfileCompletionOne';
import ProfileCompletionTwo from './components/pages/ProfileCompletionTwo';
import ProfileCompletionThree from './components/pages/ProfileCompletionThree';
import Dashboard from './components/pages/Dashboard';
import { Auth0Provider, withAuthenticationRequired as withAuth } from '@auth0/auth0-react';
import AccountTypeSelection from './components/pages/AccountTypeSelection';
import EmployerProfileCompletion from './components/pages/EmployerProfileCompletion';
import JobDetails from './components/pages/JobDetails';
import config from './environment/Config';

function App() {
  return (
    <Auth0Provider
      domain={config.auth0_domain}
      clientId={config.auth0_clientID}
      authorizationParams={{
        redirect_uri: config.auth0_callback_url,
        audience: config.auth0_audience,
      }}
      useRefreshTokens={true}
      cacheLocation="localstorage"
    >
      <BrowserRouter>
        <NavBarLayout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/callback" element={<AccountTypeSelection />} />
            <Route path="/profileone" Component={withAuth(ProfileCompletionOne)} />
            <Route path="/profiletwo" Component={withAuth(ProfileCompletionTwo)} />
            <Route path="/profilethree" Component={withAuth(ProfileCompletionThree)} />
            <Route path="/browse" Component={withAuth(Browse)} />
            <Route path="/emponboarding" Component={withAuth(EmployerProfileCompletion)} />
            <Route path="/dashboard" Component={withAuth(Dashboard)} />
            <Route exact path="/job" Component={withAuth(JobDetails)} />
          </Routes>
        </NavBarLayout>
      </BrowserRouter>
    </Auth0Provider>
  );
}

export default App;
