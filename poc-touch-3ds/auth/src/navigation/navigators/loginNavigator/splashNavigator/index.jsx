import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../../../../screens/SplashScreen';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    screenOptions={{
      title: 'My title',
    }}
  >
    <Stack.Screen
      name="SplashScreen"
      component={SplashScreen}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);
