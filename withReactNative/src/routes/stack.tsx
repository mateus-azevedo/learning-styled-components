import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RouterHeader} from './components';

import {DetailProduct, Home, Products} from '../feature';

const Stack = createNativeStackNavigator();

const routes = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerTitle: (props: any) => <RouterHeader {...props} />}}
      />
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="DetailProduct" component={DetailProduct} />
    </Stack.Navigator>
  );
};

export default routes;
