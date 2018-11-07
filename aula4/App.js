import React from 'react';
import { View, Text, TextInput, Alert } from 'react-native';
import { Button, Header } from 'react-native-elements';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      a: 5,
      b: 10,
      resultado: 0
    };
  }

  soma = (a, b) => {
    let r = a + b;
    this.setState({ resultado: r })

  }

  render() {
    return (
      <View  >
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <View style={{ marginTop: 50, alignItems: 'center' }}>
          <TextInput
            value={`${this.state.a}`}
            onChangeText={(valorA) => this.setState({ a: valorA })}
          />

          <TextInput
            value={`${this.state.b}`}
            onChangeText={(valorB) => this.setState({ b: valorB })}
          />

          <Button title='Soma' onPress={() => this.soma(this.state.a, this.state.b)} />
          <Text> {this.state.resultado} </Text>

        </View>
      </View>
    );
  }
}
