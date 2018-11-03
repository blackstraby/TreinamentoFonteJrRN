import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

class Cotacao extends Component {
  constructor() {
    super();
    this.state = {
      carregando: true,
      bitcoin: 0
    };
  }

  componentWillMount = async () => {
    //Requisição web na api
    try {
      const resposta = await fetch('https://api.bitcointrade.com.br/v1/public/BTC/ticker');
      //console.log(resposta)
      let responseJson = await resposta.json();

      console.log(responseJson.data.buy);
      this.setState({ carregando: false, bitcoin: responseJson.data });

    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <View>
        {
          this.state.carregando
            ? <ActivityIndicator size='large' color='#D0D' />
            :
            <View>
              <Text> Alta: {this.state.bitcoin.high} </Text>
              <Text> Atual: {this.state.bitcoin.last} </Text>
              <Text> Compra: {this.state.bitcoin.buy}</Text>
            </View>
        }
      </View>
    );
  }
}

export default Cotacao;
