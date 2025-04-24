import { Animated,Text,StyleSheet, Dimensions,TouchableWithoutFeedback,} from "react-native";
import React, { useRef } from 'react';

interface ICat{
    name:string 
    age :number
}
const Cat = (props: ICat) =>{
    const scale = useRef(new Animated.Value(1)).current;

    const handlePressIn = () => {
      Animated.spring(scale, {
        toValue: 0.9,
        useNativeDriver: true,
        speed: 100,
        bounciness: 0,
      }).start();
    };
  
    const handlePressOut = () => {
      Animated.spring(scale, {
        toValue: 1,
        useNativeDriver: true,
        speed: 100,
        bounciness: 10,
      }).start();
    };
  
    return (
      <TouchableWithoutFeedback
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        <Animated.View style={{ transform: [{ scale }] }}>
          <Text style={styles.txt}>
            Sou {props.name} e tenho {props.age} anos
          </Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    )
}
const styles = StyleSheet.create({
    // container: {
    //   flex: 1,
    //   borderRadius: '50',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    //   borderStyle:'dashed',
    // },
    txt:{
        backgroundColor: '#FFFF',
        fontSize:18,
        borderWidth:0.5,
        padding:10,
        margin : 5,
        borderStyle: 'dotted',
        borderRadius:5,
        textAlign:'center',
        minWidth:Dimensions.get('screen').width*0.9
        
    }
  });
export default Cat;