import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './src/Header';
import Cotacao from './src/Cotacao';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header />

        <Cotacao />

      </View>
    );
  }
}
