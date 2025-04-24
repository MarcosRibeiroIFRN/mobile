import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Randomizer from './Randomizer';

export default function App() {
  return (
    <View style={styles.container}>
      <Randomizer n1={10} n2={100} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
