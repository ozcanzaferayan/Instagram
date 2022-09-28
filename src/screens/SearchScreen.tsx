import {View} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import Text from '../components/Text';

type Props = NativeStackScreenProps<RootStackParamList, 'Search'>;

const SearchScreen = () => {
  return (
    <View>
      <Text>Search</Text>
    </View>
  );
};

export default SearchScreen;
