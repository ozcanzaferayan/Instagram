import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import {ApiProvider} from '@reduxjs/toolkit/query/react';
import {pokemonApi} from './src/services/pokemon';
import {Provider} from 'react-redux';
import store from './src/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <ApiProvider api={pokemonApi}>
        <HomeScreen />
      </ApiProvider>
    </Provider>
  );
};

export default App;
