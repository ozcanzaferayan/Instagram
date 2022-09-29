import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Program from './MaterialTopBarScreens/Program';
import Events from './MaterialTopBarScreens/Events';
import Lottery from './MaterialTopBarScreens/Lottery';

const Tab = createMaterialTopTabNavigator();

type Props = NativeStackScreenProps<RootStackParamList, 'Search'>;

const SearchScreen = (props: Props) => {
  return (
    <Tab.Navigator
      showPageIndicator={true}
      screenListeners={{
        tabPress: e => {
          const title = e.target?.split('-')[0];
          props.navigation.setOptions({
            headerTitle: title,
          });
        },
      }}>
      <Tab.Screen name="Program" component={Program} />
      <Tab.Screen name="Events" component={Events} />
      <Tab.Screen name="Lottery" component={Lottery} />
    </Tab.Navigator>
  );
};

export default SearchScreen;
