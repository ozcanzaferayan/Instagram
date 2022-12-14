import {ImageBackground, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import SvgHeart from '../../../assets/Heart';

type Props = {
  imageSrc: string;
};

const PostImage = (props: Props) => {
  const [clickCount, setClickCount] = useState(0);
  const [isHeartVisible, setIsHeartVisible] = useState(false);
  const [clickedTime, setClickedTime] = useState(0);

  const handleTap = () => {
    const clickTime = Date.now();
    const timeDifference = clickTime - clickedTime;
    if (clickCount >= 1) {
      if (timeDifference < 500) {
        setIsHeartVisible(true);
      }
      setClickedTime(clickTime);
    } else {
      setClickCount(clickCount + 1);
      setClickedTime(clickTime);
    }
  };
  return (
    <TouchableOpacity onPress={handleTap}>
      <ImageBackground
        source={{uri: props.imageSrc}}
        style={styles.imageContainer}>
        {isHeartVisible && (
          <SvgHeart width="75" height="75" style={styles.heart} />
        )}
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heart: {
    opacity: 0.9,
  },
});

export default PostImage;
