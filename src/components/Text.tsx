import {StyleSheet, Text as NativeText, useColorScheme} from 'react-native';
import React from 'react';

type Props = {
  children: React.ReactNode;
  style?: any;
};

const Text = (props: Props) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NativeText
      style={[
        {...props.style},
        isDarkMode ? styles.lightText : styles.darkText,
      ]}>
      {props.children}
    </NativeText>
  );
};

export default Text;

const styles = StyleSheet.create({
  lightText: {
    color: '#fff',
  },
  darkText: {
    color: '#000',
  },
});
