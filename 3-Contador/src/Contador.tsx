import React,{useState} from "react";
import { View,StyleSheet,Text,Button } from "react-native";


const Contador = (props : any) =>{
    const [num,setNum]= useState(0)
    const inc=()=>{setNum(num+1)}
    const dec=()=>{setNum(num-1)}
    return(
        <View style ={styles.principal}>
            <View style={styles.btns}>
                <Button title =" - "onPress={dec}></Button>
            </View>

            <Text style ={styles.display}>{num}</Text>

            <View style={styles.btns}>  
                <Button title =" + "onPress={inc}></Button>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    principal: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    btns:{
        minWidth: 50
    },
    display:{
        fontSize: 25,
        minWidth:100,
        textAlign: 'center',
        backgroundColor:'#30a',
        color: '#fff'

    }

})
export default Contador