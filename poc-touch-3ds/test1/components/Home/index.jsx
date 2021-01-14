import React from 'react';
import { View, Button, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Home ;D</Text>
    <Button 
      title="Ir para About"
      onPress={() => navigation.navigate('About') }
    />
  </View>
);

HomeScreen.navigationOptions = {
  tabBarIcon: <Icon name="Home" size={18} color="#999" />
}

export default HomeScreen;