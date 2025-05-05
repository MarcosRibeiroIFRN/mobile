import React,{useState} from 'react';
import { StyleSheet,SafeAreaView, Text, View ,TextInput} from 'react-native';

export default function App() {
  const[texto,setTexto]= useState('')
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
        Digite Algo!
      </Text>
      <TextInput style={styles.txt} onChangeText={(txt)=>setTexto(txt) }/>
      <Text style={styles.resultado}>{texto}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt:{
    borderWidth:1,
    marginHorizontal:20,
    textAlign:'left',
    paddingLeft:10
  },
  paragraph:{
    margin: 10,
    fontSize:18,
    textAlign:'center'
  },
  resultado:{
    marginHorizontal:20,
    marginVertical:10 

  }

});
