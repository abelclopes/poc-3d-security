import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../../../screens/FlowLogin/LoginScreen';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator>
    <Stack.Screen name="LoginScreen" component={LoginScreen} />
  </Stack.Navigator>
);
