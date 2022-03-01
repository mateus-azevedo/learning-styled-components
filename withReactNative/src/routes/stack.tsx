import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScreenHeader} from './components';

import {DetailProduct, Home, Products} from '../feature';

const Stack = createNativeStackNavigator();

const routes = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={() => ({
          header: (props: any) => <ScreenHeader {...props} />,
        })}
      />
      <Stack.Screen
        name="Products"
        component={Products}
        options={() => ({
          header: (props: any) => <ScreenHeader {...props} />,
        })}
      />
      <Stack.Screen
        name="DetailProduct"
        component={DetailProduct}
        options={() => ({
          header: (props: any) => <ScreenHeader {...props} />,
        })}
      />
    </Stack.Navigator>
  );
};

export default routes;
