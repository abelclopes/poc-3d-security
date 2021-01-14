import { StyleSheet, Platform, StatusBar } from 'react-native';
import { scale } from 'react-native-size-matters/extend';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? scale(0) : StatusBar.currentHeight;

export default StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
});
