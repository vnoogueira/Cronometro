import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Image, TouchableOpacity, TextComponent } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numero: 0,
      botao: 'Começar',
      ultimo: null
    }
    this.timer = null;
    this.comecar = this.comecar.bind(this);
    this.parar = this.parar.bind(this);
  }

  comecar() {
    if (this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
      this.setState({ botao: 'Começar' })
    } else {
      this.timer = setInterval(() => {
        this.setState({ numero: this.state.numero + 0.1 })
      }, 100);
      this.setState({ botao: 'Pausar' })
    }
  }

  parar() {
    if (this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
    }
    this.setState({
      ultimo: this.state.numero,
      numero: 0,
      botao: 'Começar'
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('./src/cronometro.png')}
        />
        <Text style={styles.time}>{this.state.numero.toFixed(2)}</Text>
        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.btn} onPress={this.comecar}>
            <Text style={styles.btnTexto}>{this.state.botao}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={this.parar}>
            <Text style={styles.btnTexto}>Zerar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.ultimo}>
          <Text style={styles.textoUltimo}>{this.state.ultimo > 0 ? 'Ultimo tempo: ' + this.state.ultimo.toFixed(2) + ' seg' : ''}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6A5ACD',
    alignItems: 'center',
    justifyContent: 'center'
  },
  time: {
    marginTop: -150,
    fontSize: 60,
    fontWeight: 'bold'
  },
  btnArea: {
    flexDirection: 'row',
    marginTop: 80,
    height: 40
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    margin: 17,
    borderRadius: 20,
    backgroundColor: '#FFF'
  },
  btnTexto: {
    fontSize: 20,
  },
  ultimo: {
    marginTop: 50
  },
  textoUltimo: {
    fontSize: 20,
    fontStyle: 'italic'
  }
})

export default App;