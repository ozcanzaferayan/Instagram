import React from 'react';

import {
  Button,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import {PostType} from './Post/models/PostType';
import Post from './Post/Post';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen = (props: Props) => {
  const isDarkMode = useColorScheme() === 'dark';

  const items: PostType[] = [
    {
      id: 1,
      username: 'zaferayan',
      postImage: 'https://picsum.photos/id/598/600/400',
    },
    {
      id: 2,
      username: 'hasansun',
      postImage: 'https://picsum.photos/id/1076/600/400',
    },
    {
      id: 3,
      username: 'yusufakgul',
      postImage: 'https://picsum.photos/id/1060/600/400',
    },
  ];

  const handleRenderItem = (post: PostType) => {
    return <Post post={post} />;
  };

  return (
    <SafeAreaView
      style={isDarkMode ? styles.darkContainer : styles.lightContainer}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Button
        onPress={() => props.navigation.navigate('Search', {name: 'Zafer'})}
        title="Tıkla"></Button>
      <FlatList
        data={items}
        renderItem={({item}) => handleRenderItem(item)}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  darkContainer: {
    backgroundColor: '#000',
  },
  lightContainer: {
    backgroundColor: '#fff',
  },
});

export default HomeScreen;
