import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View
} from 'react-vr';

export default class CollibraOffice1 extends React.Component {
  render() {
    return (
      <View>
        <Pano source={{uri: asset('office/CollibraOffice1.jpg')}}/>
      </View>
    );
  }
};

