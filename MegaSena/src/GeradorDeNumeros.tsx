import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,ImageBackground } from 'react-native';

const GeradorDeNumeros = () => {
  const [numeros, setNumeros] = useState<number[]>([]);

  function gerarNumeros() {
    const min = 1;
    const max = 60;
    const lista: number[] = [];

    while (lista.length < 6) {
      const numero = Math.floor(Math.random() * (max - min + 1)) + min;

      if (!lista.includes(numero)) {
        lista.push(numero);
      }
    }

    setNumeros(lista);
  }

  return (
    <ImageBackground
    source={{ uri: 'https://einvestidor.estadao.com.br/wp-content/uploads/2024/08/mega-sena-resultado-concurso-2757-quina_040820243613.png' }}
    resizeMode="cover" 
    style={styles.background}
    >
        <View style={styles.wrapper}>
        <View style={styles.numerosContainer}>
            {numeros.map((num, index) => (
            <Text key={index} style={styles.numero}>{num}</Text>
            ))}
        </View>

        <TouchableOpacity style={styles.botao} onPress={gerarNumeros}>
            <Text style={styles.textoBotao}>Gerar Números</Text>
        </TouchableOpacity>
        </View>
    </ImageBackground>    
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  numerosContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  numero: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 30,
    borderWidth:2,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 20,
    margin: 10,
  },
  botao: {
    backgroundColor: '#f5c160',
    padding: 10,
    borderRadius: 5,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default GeradorDeNumeros;
