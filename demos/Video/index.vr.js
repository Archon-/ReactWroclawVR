import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VideoPano
} from 'react-vr';

export default class ReactWroclawVR extends React.Component {
  render() {
    return (
      <View>
        <VideoPano source={{uri: asset('gopro-vide.mp4')}}/>
      </View>
    );
  }
};

AppRegistry.registerComponent('ReactWroclawVR', () => ReactWroclawVR);
