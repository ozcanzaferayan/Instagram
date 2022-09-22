import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgHeart = (props: any) => (
  <Svg
    viewBox="0 0 132.29 120.5"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    {...props}>
    <Path
      d="M120.002 10.262A38.442 38.443 45 0 0 93.854 0a38.442 38.443 45 0 0-27.687 11.803l-.016-.016-.015.015A38.442 38.443 45 0 0 38.448.001 38.442 38.443 45 0 0 .006 38.443a38.442 38.443 45 0 0 11.801 27.688l-.015.015 54.357 54.358 54.362-54.362-.003-.004a38.442 38.443 45 0 0 11.79-27.7 38.442 38.443 45 0 0-12.295-28.18z"
      fill="red"
    />
  </Svg>
);

export default SvgHeart;
