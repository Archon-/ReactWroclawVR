import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VideoPano
} from 'react-vr';

export default class Video extends React.Component {
  render() {
    return (
      <View>
        <VideoPano source={{uri: asset('coaster.webm').uri}}/>
      </View>
    );
  }
};

