import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {Routes} from './routes';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />

      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </>
  );
};

export default App;
