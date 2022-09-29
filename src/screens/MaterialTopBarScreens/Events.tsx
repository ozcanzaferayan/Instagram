import {View} from 'react-native';
import React, {useEffect} from 'react';
import Text from '../../components/Text';
import {TabParamList} from '../SearchScreen';
import {MaterialTopTabScreenProps} from '@react-navigation/material-top-tabs';

type Props = MaterialTopTabScreenProps<TabParamList, 'Events'>;

const Events = (props: Props) => {
  useEffect(() => {
    const unsubscribe = props.navigation.addListener('tabPress', () => {
      props.route.params?.setTitle('Events');
    });

    return unsubscribe;
  }, [props.navigation, props.route.params]);
  return (
    <View>
      <Text>Event</Text>
    </View>
  );
};
export default Events;
