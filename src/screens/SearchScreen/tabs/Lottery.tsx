import {View} from 'react-native';
import React from 'react';
import Text from '../../../components/Text';
import NameContext from '../../../contexts/nameContext';

const Lottery = () => {
  const name = React.useContext(NameContext);
  return (
    <View>
      <Text>{name} çekilişlerim</Text>
    </View>
  );
};

export default Lottery;
