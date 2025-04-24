import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.text}>OLHE o meu pato!!!!!</Text>
      <StatusBar style="light" />
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://blog.polipet.com.br/wp-content/uploads/2024/01/pato.jpeg',
        }}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color:'#0388fc',backgroundColor:'#ffff'
  },
  tinyLogo: {
    width: 250,
    height: 250,
  },
});
