import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import GeradorDeNumeros from './GeradorDeNumeros';

export default function App() {
  return (
    <View style={styles.container}>
      <GeradorDeNumeros />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
