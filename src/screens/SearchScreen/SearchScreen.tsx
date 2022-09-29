import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../App';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Program from './tabs/Program';
import Events from './tabs/Events';
import Lottery from './tabs/Lottery';
import handleTabPress from './util/searchScreenUtil';

const Tab = createMaterialTopTabNavigator();

type Props = NativeStackScreenProps<RootStackParamList, 'Search'>;

const SearchScreen = (props: Props) => {
  return (
    <Tab.Navigator
      screenListeners={{
        tabPress: e => {
          handleTabPress(e, props.navigation);
        },
      }}>
      <Tab.Screen name="Program" component={Program} />
      <Tab.Screen name="Events" component={Events} />
      <Tab.Screen name="Lottery" component={Lottery} />
    </Tab.Navigator>
  );
};

export default SearchScreen;
