//import
import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity, TextInput } from "react-native";

//criar constante
const pi = 3.14;

let pessoa = {
  nome: 'jose',
  idade: 20,
  dtNascimento: "2018-08-27",
  //qualquer propriedades

}


//classe
export default class App extends React.Component {
  //construtor
  constructor() {
    super();
    this.state = {
      texto: 'Digite aqui...'
    }
  }
  //state

  soma = () => {
    let n1 = 10;         //inteiro
    let n2 = 5;         //inteiro

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
      <View style={estilo.container}>

        <View style={estilo.cabecalho} >
          <Text style={estilo.titulo} >Header</Text>
        </View>

        <View style={estilo.corpo} >
          <View>
            <TouchableOpacity
              onPress={() => this.soma()}
              style={estilo.soma}
            >
              <Text style={estilo.textoSoma} >
                +
             </Text>
            </TouchableOpacity>

            <Button
              title='Sub'
              onPress={() => this.sub()}
            />

          </View>

          <View>
            <Button
              title='Mult'
              onPress={() => this.soma()}
            />
            <Button
              title='Div'
              onPress={() => this.sub()}
            />
          </View>



        </View>

        <View>

          <TextInput
            // propriedade={ alguma coisa }
            // funcao={ () => this.algumaCoisa() }
            value={this.state.texto}
            onChangeText={(value) => this.setState({ texto: value })}

          />
          <Button
            title='Aperte aqui'
            onPress={() => alert(this.state.texto)}
          />

        </View>

      </View>

    )
  }
}

//estilo
const estilo = StyleSheet.create({
  container: {
    flex: 1,
  },

  cabecalho: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f28500',
  },

  corpo: {
    flexDirection: 'row',
  },

  rodape: {

  },

  titulo: {
    fontSize: 30,
    marginTop: 10,
    color: '#fff',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    //color: 'red',
    //color: "#00aae6",
    //color: 'rgb(255,255,0)'
  },

  soma: {
    width: 50, //largura
    height: 40, //altura
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center'
  },

  textoSoma: {
    color: 'white',
    fontWeight: 'bold'
  }

})