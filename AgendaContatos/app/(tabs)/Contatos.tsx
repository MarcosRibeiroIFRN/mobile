import { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { listarContatos } from '../utils/storage';
import { Contato } from '../types/Contato';

export default function Contatos() {
  const [contatos, setContatos] = useState<Contato[]>([]);

  useEffect(() => {
    const carregar = async () => {
      const data = await listarContatos();
      setContatos(data);
    };
    const timer = setInterval(carregar, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Todos os Contatos</Text>
      <FlatList
        data={contatos}
        keyExtractor={item => item.email}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.info}>📞 {item.telefone}</Text>
            <Text style={styles.info}>📧 {item.email}</Text>
            <Text style={styles.info}>🎂 {item.aniversario}</Text>
            <Text style={styles.favorito}>{item.favorito ? '⭐ Favorito' : '☆ Não Favorito'}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#f0f4f8',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  info: {
    fontSize: 14,
    color: '#333',
  },
  favorito: {
    marginTop: 6,
    fontWeight: '600',
    color: '#007BFF',
  },
});
