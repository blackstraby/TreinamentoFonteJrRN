//import
import React from "react";
import { View, Text, Button } from "react-native";

//criar constante
const pi = 3.14;

//classe
export default class App extends React.Component {
  /*
  let = variavel
  ex: let n1 = 10
  const = constante
  ex: const pi = 3.14
  */
  soma = () => {
    let n1 = 10;         //inteiro
    let n2 = 5;         //inteiro
    let nome = 'jonas'  //string
    let nome2 = "jonas" //string
    let nome3 = `jonas` //string especial
    let valor = 28.5  // float

    n1 = n1 + n2;
    alert(n1 + n2);
  }

  sub = () => {
    let n1 = 10         //inteiro
    let n2 = 5          //inteiro
    alert(n1 - n2)
  }

  render() {
    return (
      <View>
        <Text> Olá Mundo </Text>
        <Button
          title='Soma'
          onPress={() => this.soma()}
        />
        <Button
          title='Sub'
          onPress={() => this.sub()}
        />
        <Button
          title='Div'
          onPress={() => this.div()}
        />
        <Button
          title='Mult'
          onPress={() => this.mult()}
        />
      </View>
    )
  }
}

//estilo