import { StyleSheet, View, TouchableOpacity } from "react-native";
import { IFilme } from './IFilmes';
import { Card, Text } from 'react-native-paper';

interface MovieProps extends IFilme {
  onPress?: () => void;
}

const Movie = (props: MovieProps) => {
  const { onPress, ...fm } = props;
  if (!fm || fm.Title === undefined) {
    return (
      <View style={styles.errorContainer}>
        <Text variant="bodyLarge">Nenhum filme encontrado.</Text>
      </View>
    );
  }

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <Card style={styles.card} elevation={5}>
        <Card.Cover 
          source={{ uri: fm.Poster || 'https://via.placeholder.com/300x450?text=No+Image' }} 
          style={styles.poster}
        />
        <Card.Title 
          title={fm.Title} 
          subtitle={`${fm.Year} - ${fm.Country}`}
          titleStyle={styles.title}
          subtitleStyle={styles.subtitle}
        />
        <Card.Content style={styles.content}>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Diretor:</Text>
            <Text style={styles.value}>{fm.Director}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.label}>Roteirista:</Text>
            <Text style={styles.value}>{fm.Writer}</Text>
          </View>
          {fm.Plot && (
            <View style={styles.plotContainer}>
              <Text style={styles.label}>Sinopse:</Text>
              <Text style={styles.plot} numberOfLines={3} ellipsizeMode="tail">
                {fm.Plot}
              </Text>
            </View>
          )}
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: 10,
    marginHorizontal: 10,
    borderRadius: 20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 8,
  },
  poster: {
    height: 150,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 12,
    color: '#666',
    marginTop: 1,
  },
  content: {
    padding: 8,
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 6,
    alignItems: 'flex-start',
  },
  label: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#6200ee',
    minWidth: 70,
  },
  value: {
    fontSize: 13,
    color: '#333',
    flex: 1,
    lineHeight: 18,
  },
  plotContainer: {
    marginTop: 4,
  },
  plot: {
    fontSize: 12,
    color: '#444',
    lineHeight: 16,
    marginTop: 4,
    textAlign: 'justify',
  },
  errorContainer: {
    marginTop: 20,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 20,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  }
});

export default Movie;
