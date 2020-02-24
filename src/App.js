import React, { useEffect, lazy, Suspense } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import { StateProvider } from './store';

const HomePage = lazy(() => import('./pages/HomePage'));
const AddPage = lazy(() => import('./pages/AddPage'));
const AccountsPage = lazy(() => import('./pages/AccountsPage'));
const AccountPage = lazy(() => import('./pages/AccountPage'));

// setup check service worker manually update interval
const useUpdatePwaServiceWorker = (interval = 60 * 1000) => {
  useEffect(() => {
    const update = () => {
      const sw = window.navigator.serviceWorker;
      sw &&
        sw
          .getRegistrations()
          .then(rs => rs.forEach(r => r.update()))
          .catch(console.error);
    };

    setInterval(() => update(), interval);
  }, [interval]);
};

function App() {
  useUpdatePwaServiceWorker();

  return (
    <Suspense fallback={<div className="fallback-loading">Loading...</div>}>
      <Router>
        <Switch>
          <StateProvider>
            <Route path="/" exact component={HomePage} />
            <Route path="/add" component={AddPage} />
            <Route path="/accounts" exact component={AccountsPage} />
            <Route path="/accounts/:id" component={AccountPage} />
          </StateProvider>
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
