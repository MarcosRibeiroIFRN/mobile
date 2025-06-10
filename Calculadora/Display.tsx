import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface DisplayProps {
  expression: string;
  result: string;
}

export default function Display({ expression, result }: DisplayProps) {
  return (
    <View style={styles.display}>
      <Text style={styles.expression}>{expression}</Text>
      <Text style={styles.result}>{result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  display: {
    padding: 20,
    backgroundColor: '#dcdcdc',
    borderBottomWidth: 1,
    borderColor: '#999',
  },
  expression: {
    fontSize: 24,
    color: 'red',
    textAlign: 'right',
  },
  result: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'right',
    marginTop: 10,
  },
});
