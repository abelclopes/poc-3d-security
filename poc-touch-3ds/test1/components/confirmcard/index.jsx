import React from 'react';
import { View, Button, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ConfirmCardScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>About</Text>
  </View>
);

ConfirmCardScreen.navigationOptions = {
  tabBarIcon: <Icon name="Cartao" size={18} color="#999" />
}


export default ConfirmCardScreen;