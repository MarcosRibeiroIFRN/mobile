import { View, TextInput, Button, FlatList, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import { useSearch } from '../SearchContext';
import MovieModal from '../MovieModal';
import { IFilme } from '../IFilmes';

type Movie = {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
};

import type { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  SearchMovies: undefined;
  // add other screens here if needed
};

type SearchMoviesScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SearchMovies'
>;

type Props = {
  navigation: SearchMoviesScreenNavigationProp;
};

export default function SearchMoviesScreen({ navigation }: Props) {
  const { searchText, setSearchText } = useSearch();
  const [movies, setMovies] = useState<Movie[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<IFilme | null>(null);

  const fetchMovies = async () => {
    if (searchText.trim()) {
      const res = await fetch(`https://www.omdbapi.com/?s=${searchText}&apikey=15dc2ff8`);
      const data = await res.json();
      setMovies(data.Search || []);
    }
  };

  const fetchMovieDetails = async (imdbID: string) => {
    const res = await fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=15dc2ff8`);
    const data = await res.json();
    setSelectedMovie(data);
    setModalVisible(true);
  };

  useEffect(() => {
    if (searchText.trim()) {
      fetchMovies();
    }
  }, [searchText]);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Digite o título para buscar filmes"
          style={styles.input}
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.searchButton} onPress={fetchMovies}>
          <Text style={styles.buttonText}>🔍 Buscar Lista</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>⬅️ Voltar</Text>
        </TouchableOpacity>
      </View>
      
      <FlatList
        data={movies}
        keyExtractor={(item) => item.imdbID}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.movieItem}
            onPress={() => fetchMovieDetails(item.imdbID)}
            activeOpacity={0.7}
          >
            <Image source={{ uri: item.Poster }} style={styles.poster} />
            <View style={styles.movieInfo}>
              <Text style={styles.movieTitle}>{item.Title}</Text>
              <Text style={styles.movieYear}>{item.Year}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      
      <MovieModal 
        visible={modalVisible}
        movie={selectedMovie}
        onClose={() => setModalVisible(false)}
      />
    </View>
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
  backButton: {
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
  movieItem: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 15,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  poster: { 
    width: 60, 
    height: 90, 
    marginRight: 15,
    borderRadius: 10,
  },
  movieInfo: {
    flex: 1,
  },
  movieTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  movieYear: {
    fontSize: 14,
    color: '#666',
  },
});
