import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SingleMovieScreen from './src/screens/SingleMovieScreen';
import SearchMovieScreen from './src/screens/SearchMovieScreen';
import { SearchProvider } from './src/SearchContext';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SearchProvider>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="Single"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#6200ee',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          <Stack.Screen name="Single" component={SingleMovieScreen} options={{ title: 'Buscar Filme' }} />
          <Stack.Screen name="Search" component={SearchMovieScreen} options={{ title: 'Lista de Filmes' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SearchProvider>
  );
}
