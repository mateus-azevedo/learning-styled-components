import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HeaderTitle, HeaderRight, HeaderLeft} from './components';

import {DetailProduct, Home, Products} from '../feature';

const Stack = createNativeStackNavigator();

const routes = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={({navigation}) => ({
          headerTitle: (props: any) => <HeaderTitle {...props} />,
          headerLeft: (props: any) => <HeaderLeft {...props} />,
          headerRight: (props: any) => <HeaderRight {...props} />,
        })}
      />
      <Stack.Screen name="Products" component={Products} />
      <Stack.Screen name="DetailProduct" component={DetailProduct} />
    </Stack.Navigator>
  );
};

export default routes;
