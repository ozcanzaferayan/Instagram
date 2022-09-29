import {Button, FlatList, RefreshControl, View} from 'react-native';
import React, {useEffect} from 'react';
import Text from '../../../components/Text';
import {useDispatch, useSelector} from 'react-redux';
import {DECREMENT, GET_POSTS, INCREMENT} from '../../../actions/actions';
import {GetPosts} from '../../../actions/postActions';

const Program = () => {
  const dispatch = useDispatch();
  // @ts-ignore
  const counter = useSelector(state => state.counter);
  const posts = useSelector(state => state.Posts);

  useEffect(() => {
    dispatch(GetPosts());
  }, [dispatch]);

  return (
    <View>
      <Text>{counter}</Text>
      <FlatList
        data={posts}
        renderItem={({item}) => <Text>{item.username}</Text>}
        keyExtractor={item => item.id.toString()}
      />

      <Button onPress={() => dispatch({type: INCREMENT})} title="Increase" />
      <Button onPress={() => dispatch({type: DECREMENT})} title="Decrease" />
    </View>
  );
};

export default Program;
