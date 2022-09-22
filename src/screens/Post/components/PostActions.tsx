import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import IconFeather from 'react-native-vector-icons/Feather';
import IconIonicons from 'react-native-vector-icons/Ionicons';

const PostActions = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.leftIcons}>
          <TouchableOpacity onPress={() => console.log('Liked')}>
            <Icon style={styles.icon} name="hearto" size={25} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log('Comments')}>
            <IconIonicons
              style={styles.icon}
              name="chatbubble-outline"
              size={25}
              color="#fff"
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => console.log('Send')}>
            <IconFeather
              style={styles.icon}
              name="send"
              size={25}
              color="#fff"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => console.log('Bookmark')}>
          <IconFeather
            style={styles.icon}
            name="bookmark"
            size={25}
            color="#fff"
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default PostActions;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
  },
  leftIcons: {
    flexDirection: 'row',
  },
  icon: {
    marginRight: 10,
  },
  iconRight: {
    marginRight: 10,
  },
});
