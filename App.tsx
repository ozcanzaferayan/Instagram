import React from 'react';
import AppProviders from './src/AppProviders';
import AppNavigation from './src/navigation/AppNavigation';

const App = () => {
  return (
    <AppProviders>
      <AppNavigation />
    </AppProviders>
  );
};

export default App;
