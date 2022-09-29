import {
  View,
  Text,
  Image,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import React from 'react';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import {Icon} from 'react-native-vector-icons/Icon';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ReelsScreen from '../screens/ReelsScreen';
import SearchScreen from '../screens/SearchScreen/SearchScreen';
import ShopScreen from '../screens/ShopScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator<RootStackParamList>();

export type RootStackParamList = {
  Home: any;
  Search: {name: string} | undefined;
  Reels: any;
  Shop: any;
  Profile: any;
};

const AppNavigation = () => {
  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            const iconSuffix = focused ? '' : '-outline';

            switch (route.name) {
              case 'Home':
                iconName = 'home';
                break;
              case 'Search':
                iconName = 'search';
                break;
              case 'Reels':
                iconName = 'play';
                break;
              case 'Shop':
                iconName = 'cart';
                break;
              case 'Profile':
                iconName = 'person';
                break;
              default:
                iconName = 'user';
            }

            // You can return any component that you like here!
            return (
              <Ionicons
                name={iconName + iconSuffix}
                size={size}
                color={color}
              />
            );
          },
          tabBarActiveTintColor: 'dodgerblue',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerLeft: () => (
              <TouchableOpacity onPress={() => console.log('Logo clicked')}>
                <Image
                  source={
                    scheme === 'dark'
                      ? require('./src/assets/logo_white.png')
                      : require('./src/assets/logo.png')
                  }
                  style={{height: 25, width: 90}}
                />
              </TouchableOpacity>
            ),
            headerTitle: '',
            headerRight: () => (
              <TouchableOpacity onPress={() => console.log('Liked')}>
                <Icon name="hearto" size={25} color="#fff" />
              </TouchableOpacity>
            ),
          }}
        />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Reels" component={ReelsScreen} />
        <Tab.Screen name="Shop" component={ShopScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
