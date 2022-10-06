import React from 'react';

import {
  Button,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import Text from '../components/Text';
import {
  useGetPokemonByNameQuery,
  useGetPokemonsPaginationQuery,
} from '../services/pokemon';

const HomeScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const {data, error, isLoading} = useGetPokemonsPaginationQuery({
    limit: 3,
    offset: 0,
  });

  if (isLoading) <Text>Loading....</Text>;
  if (error) <Text>Error</Text>;

  return (
    <SafeAreaView>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView>
        {data && (
          <Text style={{color: '#fff'}}>{JSON.stringify(data, null, 2)}</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
