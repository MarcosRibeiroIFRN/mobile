import { View, TextInput, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import Movie from '../Movie';
import MovieModal from '../MovieModal';
import { IFilme } from '../IFilmes';
import { useSearch } from '../SearchContext';

import type { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  SingleMovie: undefined;
  Search: undefined;
};

type SingleMovieScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SingleMovie'>;

interface Props {
  navigation: SingleMovieScreenNavigationProp;
}

export default function SingleMovieScreen({ navigation }: Props) {
  const { searchText, setSearchText } = useSearch();
  const [movie, setMovie] = useState<IFilme | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const fetchMovie = async () => {
    if (searchText.trim()) {
      const res = await fetch(`https://www.omdbapi.com/?t=${searchText}&apikey=15dc2ff8`);
      const data = await res.json();
      setMovie(data);
    }
  };

  useEffect(() => {
    if (searchText.trim()) {
      fetchMovie();
    }
  }, [searchText]);

  const handleMoviePress = () => {
    if (movie) {
      setModalVisible(true);
    }
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Digite o título do filme"
          style={styles.input}
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.searchButton} onPress={fetchMovie}>
          <Text style={styles.buttonText}>🔍 Buscar Filme</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.listButton} 
          onPress={() => navigation.navigate('Search')}
        >
          <Text style={styles.buttonText}>� Ver Lista de Filmes</Text>
        </TouchableOpacity>
      </View>
      
      {movie && <Movie {...movie} onPress={handleMoviePress} />}
      
      <MovieModal 
        visible={modalVisible}
        movie={movie}
        onClose={() => setModalVisible(false)}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: { 
    borderWidth: 2, 
    borderColor: '#6200ee',
    borderRadius: 15,
    padding: 15,
    fontSize: 16,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  searchButton: {
    backgroundColor: '#6200ee',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 15,
    flex: 0.48,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  listButton: {
    backgroundColor: '#6200ee',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 15,
    flex: 0.48,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
