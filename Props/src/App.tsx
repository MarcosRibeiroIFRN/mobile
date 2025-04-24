import Cat from './Cat';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Cat  name = "Madruguinha" age={7}/>
      <Cat  name = "Agusto" age={13}/>
      <Cat  name = "ABC" age={109}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00FFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
