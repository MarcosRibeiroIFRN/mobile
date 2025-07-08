import React from 'react';
import { Modal, View, StyleSheet, ScrollView, TouchableOpacity, Text, Dimensions } from 'react-native';
import { Card } from 'react-native-paper';
import { IFilme } from './IFilmes';

const { width, height } = Dimensions.get('window');

interface MovieModalProps {
  visible: boolean;
  movie: IFilme | null;
  onClose: () => void;
}

const MovieModal: React.FC<MovieModalProps> = ({ visible, movie, onClose }) => {
  if (!movie || !movie.Title) {
    return null;
  }

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="fullScreen"
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>✕ Fechar</Text>
          </TouchableOpacity>
        </View>
        
        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          <Card style={styles.card} elevation={5}>
            <Card.Cover 
              source={{ uri: movie.Poster || 'https://via.placeholder.com/400x600?text=No+Image' }} 
              style={styles.poster}
            />
            <Card.Title 
              title={movie.Title} 
              subtitle={`${movie.Year} - ${movie.Country}`}
              titleStyle={styles.title}
              subtitleStyle={styles.subtitle}
            />
            <Card.Content style={styles.content}>
              <View style={styles.infoRow}>
                <Text style={styles.label}>Diretor:</Text>
                <Text style={styles.value}>{movie.Director}</Text>
              </View>
              <View style={styles.infoRow}>
                <Text style={styles.label}>Roteirista:</Text>
                <Text style={styles.value}>{movie.Writer}</Text>
              </View>
              {movie.Plot && (
                <View style={styles.plotContainer}>
                  <Text style={styles.label}>Sinopse:</Text>
                  <Text style={styles.plot}>{movie.Plot}</Text>
                </View>
              )}
            </Card.Content>
          </Card>
        </ScrollView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#6200ee',
    paddingTop: 50,
    paddingBottom: 15,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  closeButton: {
    alignSelf: 'flex-end',
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  scrollView: {
    flex: 1,
  },
  card: {
    margin: 15,
    borderRadius: 20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 8,
  },
  poster: {
    height: height * 0.4,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  content: {
    padding: 20,
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 15,
    alignItems: 'flex-start',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6200ee',
    minWidth: 100,
  },
  value: {
    fontSize: 16,
    color: '#333',
    flex: 1,
    lineHeight: 24,
  },
  plotContainer: {
    marginTop: 10,
  },
  plot: {
    fontSize: 15,
    color: '#444',
    lineHeight: 24,
    marginTop: 10,
    textAlign: 'justify',
  },
});

export default MovieModal;
