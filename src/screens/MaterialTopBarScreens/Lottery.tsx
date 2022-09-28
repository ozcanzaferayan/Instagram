import {View} from 'react-native';
import React, {useEffect} from 'react';
import Text from '../../components/Text';

import {MaterialTopTabScreenProps} from '@react-navigation/material-top-tabs';
import {TabParamList} from '../SearchScreen';

type Props = MaterialTopTabScreenProps<TabParamList, 'Program'>;
const Lottery = (props: Props) => {
  useEffect(() => {
    const unsubscribe = props.navigation.addListener('tabPress', e => {
      props.route.params?.setTitle('Lottery');
    });

    return unsubscribe;
  }, [props.navigation, props.route.params]);
  return (
    <View>
      <Text>Lottery</Text>
    </View>
  );
};

export default Lottery;
