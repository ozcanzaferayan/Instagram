import React from 'react';
import NameContext from './contexts/nameContext';
import {QueryClientProvider} from '@tanstack/react-query';
import {queryClient} from './config/config';

const AppProviders = (props: any) => {
  return (
    <NameContext.Provider value="Zafer">
      <QueryClientProvider client={queryClient}>
        {props.children}
      </QueryClientProvider>
    </NameContext.Provider>
  );
};

export default AppProviders;
