import * as React from 'react'

import { SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Text, Alert } from 'react-native'

import TouchId from 'react-native-touch-id';

TouchId.authenticate().then(()=> {
  Alert.alert('Authenticado com sucesso!');
}).catch(()=> {
  Alert.alert('A authenticado falhou. digite sua senha!');
});

const  Auth = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TextInput  style={styles.input} placeholder="E-mail" 
        placeholderTextColor="#444"/>
      <TextInput  style={styles.input} placeholder="Senha"  
        placeholderTextColor="#444"/>
      <TouchableOpacity  style={styles.button}>
        <Text>Entrar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#19181f',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: 200,
    height: 45,
    borderColor: '#7159c1',
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
  },
  button: {
    width: 200, 
    height: 45,
    borderWidth: 2,
    borderColor: '#7159c1',
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Auth;
