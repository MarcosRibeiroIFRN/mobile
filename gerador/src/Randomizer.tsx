import React, { useState } from "react";
import {View,ImageBackground,Text,StyleSheet, Dimensions,TouchableOpacity, TextInput} from "react-native";

interface numeros{
    n1:number
    n2:number
}

const Randomizer=()=> {
    const [numero,setNumero]=useState<number | null>(null)

    function Randomizador(){
        const min = parseInt(text1)
        const max = parseInt(text2)
        const random = Math.floor(Math.random()*(max - min + 1 ))+ min
        setNumero (random)
    }
    const [text1,setText1]=useState('')
    const [text2,setText2]=useState('')
    return (
        <ImageBackground
        source={{ uri: 'https://twoscents.com.au/cdn/shop/files/newjeans.jpg?v=1719739127&width=600' }}
        resizeMode="cover" 
        style={styles.background}
      >
        <View style={styles.container}>
            <View style={styles.cabecalho}>
              <Text style={styles.texto}>Digite os números </Text>
              <View style={styles.numeros}>
                <TextInput  style={styles.txt} onChangeText={(txt)=>setText1(txt) }/>
                <TextInput style={styles.txt} onChangeText={(txt)=>setText2(txt) }/>
              </View>
            </View>
            <View>
            <Text style={styles.texto}>
              {numero !== null
                ? `Número sorteado: ${numero}`
                : "Toque no botão para sortear um número"}
            </Text>
            </View>
        
      
          
            <TouchableOpacity style={styles.botao} onPress={Randomizador}>
              <Text style={styles.textoBotao}>Gerar número</Text>
            </TouchableOpacity>
        </View>
        </ImageBackground>
      );
    };
    const styles =StyleSheet.create({
        container: {
            flex: 1,
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").height,
            justifyContent: "space-around",
            alignItems: "center",
           
          },
          texto: {
            fontSize: 24,
            color: "#fff",
            fontWeight: "bold",
            backgroundColor:'#1e39d4',
            borderRadius:10,
            paddingVertical: 35,
            paddingHorizontal: 25,
            alignSelf:'center' 
    
          },
          numeros:{
            flexDirection: 'row', 
            justifyContent: 'space-between', 
          },
          botao: {
            backgroundColor: "#1e39d4",
            paddingVertical: 12,
            paddingHorizontal: 25,
            borderRadius: 10,
          },
          textoBotao: {
            color: "#fff",
            fontSize: 18,
            fontWeight: "bold",
          },
          background: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          },
          txt:{
            borderWidth:1,
            alignSelf:'center',
            borderColor:'#fff',
            backgroundColor:'#fff',
            borderRadius:5,
            marginHorizontal:50,
            marginVertical:10,
            paddingLeft:10,
            width:70
          },
          cabecalho:{
            backgroundColor: "#1e39d4",
            borderRadius:10,          
          }
      });

export default Randomizer