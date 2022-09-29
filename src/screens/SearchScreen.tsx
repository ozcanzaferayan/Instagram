import React, {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Program from './MaterialTopBarScreens/Program';
import Events from './MaterialTopBarScreens/Events';
import Lottery from './MaterialTopBarScreens/Lottery';

const Tab = createMaterialTopTabNavigator<TabParamList>();

type Props = NativeStackScreenProps<RootStackParamList, 'Search'>;

export type TabParamList = {
  Program: TabScreenProps | undefined;
  Events: TabScreenProps | undefined;
  Lottery: TabScreenProps | undefined;
};

type TabScreenProps = {
  setTitle: (title: 'Program' | 'Events' | 'Lottery') => void;
};

const SearchScreen = (props: Props) => {
  const [headerTitle, setHeaderTitle] = useState('Programlarım');

  props.navigation.setOptions({
    headerTitle: headerTitle,
  });
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Program"
        component={Program}
        initialParams={{setTitle: setHeaderTitle}}
      />
      <Tab.Screen
        name="Events"
        component={Events}
        initialParams={{setTitle: setHeaderTitle}}
      />
      <Tab.Screen
        name="Lottery"
        component={Lottery}
        initialParams={{setTitle: setHeaderTitle}}
      />
    </Tab.Navigator>
  );
};

export default SearchScreen;
