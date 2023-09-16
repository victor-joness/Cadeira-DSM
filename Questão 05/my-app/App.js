import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class Calculadora extends Component {
  constructor() {
    super();
    this.state = {
      display: '0',
      numeroAtual: '0',
      operador: null,
      numeroAnterior: null,
      aguardandoNovoNumero: false,
    };
  }

  manipularNumeroPressionado = (numero) => {
    const { numeroAtual, aguardandoNovoNumero } = this.state;

    if (aguardandoNovoNumero) {
      this.setState({
        numeroAtual: numero,
        aguardandoNovoNumero: false,
        display: this.state.display + numero,
      });
    } else {
      this.setState((prevState) => ({
        numeroAtual:
          prevState.numeroAtual === '0' ? numero : prevState.numeroAtual + numero,
        display: prevState.display + numero,
      }));
    }
  };

  manipularOperadorPressionado = (op) => {
    const { numeroAtual, operador, numeroAnterior } = this.state;

    if (numeroAnterior && operador) {
      this.calcular();
    }

    this.setState((prevState) => ({
      operador: op,
      numeroAnterior: prevState.display,
      aguardandoNovoNumero: true,
      display: prevState.display + op,
    }));
  };

  calcular = () => {
    const { numeroAtual, operador, numeroAnterior } = this.state;
    let resultado;

    switch (operador) {
      case '+':
        resultado = parseFloat(numeroAnterior) + parseFloat(numeroAtual);
        break;
      case '-':
        resultado = parseFloat(numeroAnterior) - parseFloat(numeroAtual);
        break;
      case '*':
        resultado = parseFloat(numeroAnterior) * parseFloat(numeroAtual);
        break;
      case '/':
        resultado = parseFloat(numeroAnterior) / parseFloat(numeroAtual);
        break;
      default:
        return;
    }

    this.setState({
      display: resultado.toString(),
      numeroAtual: resultado.toString(),
      operador: null,
      numeroAnterior: null,
    });
  };

  /* método para limpar o display da calculadora, então vamos zerar todos os atribudos */
  limpar = () => {
    this.setState({
      display: '0',
      numeroAtual: '0',
      operador: null,
      numeroAnterior: null,
      aguardandoNovoNumero: false,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.display}>{this.state.display}</Text>
        <View style={styles.botoes}>
          <TouchableOpacity
            style={styles.botao}
            onPress={() => this.manipularNumeroPressionado('7')}
          >
            <Text style={styles.textoBotao}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.botao}
            onPress={() => this.manipularNumeroPressionado('8')}
          >
            <Text style={styles.textoBotao}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.botao}
            onPress={() => this.manipularNumeroPressionado('9')}
          >
            <Text style={styles.textoBotao}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.botaoOperador}
            onPress={() => this.manipularOperadorPressionado('+')}
          >
            <Text style={styles.textoBotao}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.botao}
            onPress={() => this.manipularNumeroPressionado('4')}
          >
            <Text style={styles.textoBotao}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.botao}
            onPress={() => this.manipularNumeroPressionado('5')}
          >
            <Text style={styles.textoBotao}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.botao}
            onPress={() => this.manipularNumeroPressionado('6')}
          >
            <Text style={styles.textoBotao}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.botaoOperador}
            onPress={() => this.manipularOperadorPressionado('-')}
          >
            <Text style={styles.textoBotao}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.botao}
            onPress={() => this.manipularNumeroPressionado('1')}
          >
            <Text style={styles.textoBotao}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.botao}
            onPress={() => this.manipularNumeroPressionado('2')}
          >
            <Text style={styles.textoBotao}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.botao}
            onPress={() => this.manipularNumeroPressionado('3')}
          >
            <Text style={styles.textoBotao}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.botaoOperador}
            onPress={() => this.manipularOperadorPressionado('*')}
          >
            <Text style={styles.textoBotao}>*</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.botao}
            onPress={() => this.manipularNumeroPressionado('0')}
          >
            <Text style={styles.textoBotao}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.botaoOperador}
            onPress={() => this.manipularOperadorPressionado('/')}
          >
            <Text style={styles.textoBotao}>/</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.botaoOperador}
            onPress={() => this.calcular()}
          >
            <Text style={styles.textoBotao}>=</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.botaoOperador}
            onPress={() => this.limpar()}
          >
            <Text style={styles.textoBotao}>C</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#696969'
  },
  display: {
    fontSize: 36,
    color: 'white',
    borderWidth: 1,
    borderColor: 'white',
    padding: 20,
    width: '90%',
    borderRadius: 10,
  },
  botoes: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin : 15
  },
  botao: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 5,
    borderRadius: 10,
  },
  botaoOperador: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFA500',
    margin: 5,
    borderRadius: 10,
  },
  textoBotao: {
    fontSize: 24,
    color: 'black',
  },
});

export default Calculadora;
