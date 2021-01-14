import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../../../screens/HomeScreen';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    screenOptions={{
      title: 'My title',
    }}
  >
    <Stack.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{
        headerShown: true,
      }}
    />
  </Stack.Navigator>
);
