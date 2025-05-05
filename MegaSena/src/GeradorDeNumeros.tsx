import React from "react";
import { SafeAreaView, StyleSheet, Text, View,TouchableOpacity } from 'react-native';

const GeradorDeNumeros=()=>{
    
    var lista:number[] = []
    function Gerador(){
        const min = 1
        const max = 60
        var i=0
        var numero=0
        numero = Math.floor(Math.random()*(max - min + 1 ))+ min
        while (i < 6){
            if(lista.includes(numero)){
            continue   
            }else{
                lista.push(numero)
                i++
            }
        }
    
    }

    return(
        <View>
            <View style={styles.container}>
                <Text style={styles.paragraph}>
                    {
                        lista.map((name,index)=>{
                            return(
                                <text style={styles.txt} key={index}> {name} </text>
                            )
                        })
                    }
                </Text>
            </View>
            <View style={styles.container}>
                <TouchableOpacity onPress={Gerador}>
                    <Text style={styles.textoBotao}> Gerar Números</Text>
                </TouchableOpacity>
            </View>       
        </View>

    )
    
}
const styles =StyleSheet.create({
    container:{
        flex:1,
    },
    paragraph:{
        margin:24,
    },
    txt:{
        width:'100%'
    },
    textoBotao:{
        color:'#fff',
        fontSize:18,
        fontWeight:"bold"
    }
})
export default GeradorDeNumeros


