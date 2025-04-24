import {View,Text,StyleSheet,Image} from 'react-native';

const AssetExample= () =>(
    <View>
        <Image style={styles.immg} source={require('../assets/favicon.png')}/>
    </View>
)
const styles = StyleSheet.create({
    immg:{
        backgroundColor:'#00FFFF',
        fontWeight:500,
        textAlign:'center'
    }
}
)
export default AssetExample