import { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { listarFavoritos } from '../utils/storage';
import { Contato } from '../types/Contato';

export default function Favoritos() {
  const [favoritos, setFavoritos] = useState<Contato[]>([]);

  useEffect(() => {
    const carregar = async () => {
      const data = await listarFavoritos();
      setFavoritos(data);
    };
    const timer = setInterval(carregar, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Contatos Favoritos ⭐</Text>
      <FlatList
        data={favoritos}
        keyExtractor={item => item.email}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.info}>📞 {item.telefone}</Text>
            <Text style={styles.info}>📧 {item.email}</Text>
            <Text style={styles.info}>🎂 {item.aniversario}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={{ textAlign: 'center', marginTop: 20 }}>Nenhum contato favorito.</Text>}
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
    backgroundColor: '#fff8e1',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#ffd54f',
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
});
