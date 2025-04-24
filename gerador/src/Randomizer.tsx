import React, { useState } from "react";
import {View,ImageBackground,Text,StyleSheet, Dimensions,TouchableOpacity} from "react-native";

interface numeros{
    n1:number
    n2:number
}

const Randomizer=(props: numeros)=> {
    const [numero,setNumero]=useState<number | null>(null)

    function Randomizador(){
        const min = Math.min(props.n1,props.n2)
        const max = Math.max(props.n1,props.n2);
        const random = Math.floor(Math.random()*(max - min + 1 ))+ min
        setNumero (random)
    }
    return (
        <ImageBackground
        source={{ uri: 'https://twoscents.com.au/cdn/shop/files/newjeans.jpg?v=1719739127&width=600' }}
        resizeMode="cover" 
        style={styles.background}
      >
        <View style={styles.container}>

            <Text style={styles.texto}>
              {numero !== null
                ? `Número sorteado: ${numero}`
                : "Toque no botão para sortear um número"}
            </Text>
        
      
          
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

      });

export default Randomizer