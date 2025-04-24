import {View,Text,StyleSheet} from 'react-native';

const Footer = () =>(
    <View>
        <Text style = {styles.txt}> Marcola </Text>
    </View>
)
const styles = StyleSheet.create({
    txt:{
        backgroundColor:'#00FFFF',
        fontWeight:500,
        textAlign:'center'
    }
}
)
export default Footer