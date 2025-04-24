import { StatusBar } from 'expo-status-bar';
import { SafeAreaView,StyleSheet, Text, View,} from 'react-native';
import footer from '../components/Footer'
import Footer from '../components/Footer';
import {Card} from 'react-native-paper';
import AssetExample from '../components/AssetExample';

export default function App() {
  return (

    <SafeAreaView style={styles.container}>

    <View style={styles.Main}>
      <Text style={styles.Paragraph}>
        textando o flexbox</Text>
      <StatusBar style="auto" />
        <AssetExample/>
        <AssetExample/>
    </View>
    <View style={styles.footer}>
      <Footer/>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#044',
    justifyContent: 'center',
  },
  Main:{
    flex :9,
    justifyContent:'space-aroud',
    alignItems:'center',
    flexDirection:'row'
  },
  footer:{
    flex:1,
    alignSelf:'stretch',
    justifyContent:'flex-end',
  },
  Paragraph:{
    fontSize:18,
    fontWeight:'bold',
    textAlign:'center',
    margin:24,

  }
});
