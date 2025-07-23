import { View, Text, TextInput, Button, Alert, StyleSheet, ScrollView } from 'react-native';
import { useState } from 'react';
import { salvarContato } from '../utils/storage';
import { Contato } from '../types/Contato';

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [aniversario, setAniversario] = useState('');

const handleSalvar = async () => {
  const novoContato: Contato = { nome, telefone, email, aniversario, favorito: false };
  console.log('Tentando salvar:', novoContato);
  const sucesso = await salvarContato(novoContato);
  console.log('Resultado do salvarContato:', sucesso);
  if (sucesso) {
    Alert.alert('Contato salvo!');
    setNome('');
    setTelefone('');
    setEmail('');
    setAniversario('');
  } else {
    Alert.alert('Erro', 'Já existe um contato com esse email.');
  }
};

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Novo Contato</Text>

      <TextInput style={styles.input} placeholder="Nome" value={nome} onChangeText={setNome} />
      <TextInput style={styles.input} placeholder="Telefone" keyboardType="phone-pad" value={telefone} onChangeText={setTelefone} />
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Data de Aniversário" value={aniversario} onChangeText={setAniversario} />

      <View style={styles.botaoContainer}>
        <Button title="Salvar Contato" onPress={handleSalvar} color="#007BFF" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  botaoContainer: {
    marginTop: 10,
  },
});
