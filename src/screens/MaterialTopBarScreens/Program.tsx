import {View} from 'react-native';
import React, {useEffect} from 'react';
import Text from '../../components/Text';
import {TabParamList} from '../SearchScreen';

import {MaterialTopTabScreenProps} from '@react-navigation/material-top-tabs';

type Props = MaterialTopTabScreenProps<TabParamList, 'Program'>;

const Program = (props: Props) => {
  useEffect(() => {
    const unsubscribe = props.navigation.addListener('tabPress', e => {
      props.route.params?.setTitle('Program');
    });

    return unsubscribe;
  }, [props.navigation, props.route.params]);
  return (
    <View>
      <Text>Programlarım</Text>
    </View>
  );
};

export default Program;
