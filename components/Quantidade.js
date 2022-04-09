import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

function Salgadinhos(props) {
  function Conta() {
    const refrigerante = 600; //600ml
    const agua = 200; //200ml
    const bolo = 100; //100g
    const doces = 3;
    const salgadinhos = 10;
  }

  return (
    <View style={styles.textContainer} >
      <Text style={styles.result}>Refrigerante: {(props.qtd * 600)/1000} L</Text>
      <Text style={styles.result}>Água: {(props.qtd * 200) /1000} L </Text>
      <Text style={styles.result}>Bolo: {(props.qtd * 100) /1000} KG</Text>
      <Text style={styles.result}>Doces em geral: {(props.qtd * 3)} Unidades</Text>
      <Text style={styles.result}>Salgadinhos: {(props.qtd * 10)} Unidades</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    marginLeft: 10,
    marginTop: 30,
  },
  result: {
    padding: 10,
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    borderRadius: 10,
  },
});

export default Salgadinhos;
