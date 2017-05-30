import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';

export default class WroGda extends React.Component {
  render() {
    console.log(asset('RIGHT.jpg'));
    return (
      <View>
        <Pano source={{
          uri: [
            asset('RIGHT.jpg').uri,
            asset('LEFT.jpg').uri,
            asset('TOP.jpg').uri,
            asset('DOWN.jpg').uri,
            asset('BACK.jpg').uri,
            asset('FRONT.jpg').uri 
          ] 
        }} /> 
      </View>
    );
  }
};

AppRegistry.registerComponent('WroGda', () => WroGda);
