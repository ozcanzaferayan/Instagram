import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../../App';

const handleTabPress = (
  e: any,
  navigation: NativeStackNavigationProp<RootStackParamList, 'Search'>,
) => {
  const title = e.target?.split('-')[0];
  let headerTitle = '';
  switch (title) {
    case 'Program':
      headerTitle = 'Programlarım';
      break;
    case 'Events':
      headerTitle = 'Etkinlikler';
      break;
    case 'Lottery':
      headerTitle = 'Çekilişler';
      break;
  }
  navigation.setOptions({
    headerTitle: headerTitle,
  });
};

export default handleTabPress;
