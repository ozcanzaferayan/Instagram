import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import store from './src/store/store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
};

export default App;
