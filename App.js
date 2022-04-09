 import * as React from 'react';
import { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import Constants from 'expo-constants';
import Salgadinhos from './components/Quantidade'


export default function App() {

  const [quantidade, setQuantidade] = useState('');
  

  return (
    <View style={styles.container}>
    <View style={styles.titleContainer}>
      <Text style={styles.title} >Salgadinhos para a sua Festa!</Text>
    </View>
      <View style={styles.inputContainer}>
        <TextInput 
        style={styles.input} 
        placeholder={'Digite o número de convidados'} 
        value={quantidade}
        onChangeText={ (quantidade) => setQuantidade(quantidade) }

        />
      </View>


      

        <Salgadinhos qtd={quantidade}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#6959CD',
    fontFamily: 'Roboto'
  },
  inputContainer: {
    width: '100vw',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  },
  input: {
    width: '90vw',
    padding: 10,
    backgroundColor: '#FFF',
    borderRadius: 10,
  },
  buttonContainer: {
    width: '100vw',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  titleContainer:{
    alignItems: 'center',
    justifyContent: 'center'
  },
  result: {
    padding: 10,
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    borderRadius: 10,
  },
  title: {
  padding: 10,
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    borderRadius: 10,
  },
  button: {
    width: '40vw',
    alignItems: 'center',
    backgroundColor: 'red',
    color: '#FFF',
    padding: 10,
    borderRadius: 10,
    fontSize: 16,
    marginVertical: 5,
    fontWeight: 'bold'
  }
});
