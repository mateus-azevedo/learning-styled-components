import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HeaderTest} from './components';

import {DetailProduct, Home, Products} from '../feature';

const Stack = createNativeStackNavigator();

const routes = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={({navigation}) => ({
          header: (props: any) => <HeaderTest {...props} />,
        })}
      />
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="DetailProduct" component={DetailProduct} />
    </Stack.Navigator>
  );
};

export default routes;
