import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Header extends Component {

  render() {
    return (
      <View style={estilo.container}>
        <Text style={estilo.titulo}> Cotação do Bitcoin </Text>
      </View>
    );
  }
}

const estilo = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 15,

  },
  titulo: {
    fontSize: 25,
    textAlign: 'center'

  }
})

export default Header;