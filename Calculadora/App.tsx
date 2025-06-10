import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Display from './Display';
import Key from './Key';

export default function App() {
  const [expression, setExpression] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const addToExpression = (char: string) => {
    setExpression(prev => prev + char);
  };

  const ApagarTudo = () => {
    setExpression('');
    setResult('');
  };

  const Apagar = () => {
    setExpression(prev => prev.slice(0, -1));
  };

  const calcular = () => {
    try {
      const evalResult = eval(expression);
      setResult(evalResult.toString());
    } catch {
      setResult('Erro');
    }
  };

  return (
    <View style={styles.container}>
      <Display expression={expression} result={result} />
      <View style={styles.keyboard}>
        <View style={styles.linha}>
          <Key label="AC" onClick={ApagarTudo} />

          <Key label="(" onClick={() => addToExpression('(')} />
          <Key label=")" onClick={() => addToExpression(')')} />
          <Key label="/" onClick={() => addToExpression('/')} />
        </View>
        <View style={styles.linha}>
          <Key label="7" onClick={() => addToExpression('7')} />
          <Key label="8" onClick={() => addToExpression('8')} />
          <Key label="9" onClick={() => addToExpression('9')} />
          <Key label="*" onClick={() => addToExpression('*')} />
        </View>
        <View style={styles.linha}>
          <Key label="4" onClick={() => addToExpression('4')} />
          <Key label="5" onClick={() => addToExpression('5')} />
          <Key label="6" onClick={() => addToExpression('6')} />
          <Key label="-" onClick={() => addToExpression('-')} />      
        </View>
        <View style={styles.linha}>
          <Key label="1" onClick={() => addToExpression('1')} />
          <Key label="2" onClick={() => addToExpression('2')} />
          <Key label="3" onClick={() => addToExpression('3')} />
          <Key label="+" onClick={() => addToExpression('+')} />
        </View>
        <View style={styles.linha}>
          <Key label="0" onClick={() => addToExpression('0')} />
          <Key label="." onClick={() => addToExpression('.')} />
          <Key label="<=" onClick={Apagar} /> 
          <Key label="=" onClick={calcular} />

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#f5f5f5',
  },
  keyboard: {
    padding: 10,
  },
  linha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});
