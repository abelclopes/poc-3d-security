import * as React from 'react';
import styled from 'styled-components/native';
// import SplashScreen from 'react-native-splash-screen';
import {StyleSheet} from 'react-native';
import Auth from './src/common/components/auth/Auth';

const App = () => {
  // useEffect(() => {
  //   SplashScreen.hide();
  // }, []);

  return (
    <WrapperCheckBox style={styles.container}>
      <Auth />
      <TextView>teste</TextView>
    </WrapperCheckBox>
  );
};

export const WrapperCheckBox = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TextView = styled.View`
  color: '#00ff88';
  font-size: '4em';
`;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#19181f',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
