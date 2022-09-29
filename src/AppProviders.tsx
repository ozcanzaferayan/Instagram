import React from 'react';
import NameContext from './contexts/nameContext';
import {QueryClientProvider} from '@tanstack/react-query';
import {queryClient} from './config/config';
import {Provider} from 'react-redux';
import {store} from './store/store';

const AppProviders = (props: any) => {
  return (
    <Provider store={store}>
      <NameContext.Provider value="Zafer">
        <QueryClientProvider client={queryClient}>
          {props.children}
        </QueryClientProvider>
      </NameContext.Provider>
    </Provider>
  );
};

export default AppProviders;
