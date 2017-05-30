import React from 'react';
import {
  AppRegistry,
  View,
  Pano, 
  Model,
  AmbientLight,
  PointLight,
  DirectionalLight,
  asset
} from 'react-vr';
import Ship from  "./components/forest/Ship"

export default class ReactWroclawVR extends React.Component {
  render() {
    console.log("render")
    return (
      <View>
        <AmbientLight intensity={0.85} />
        <PointLight
          intensity={0.35}
          style={{color: 'white', transform: [{translate: [0, 600, 300]}]}}
        />
        <Pano source={asset('forest/heaven.png')} />
        <Model
          source={{obj: asset('forest/plane.obj'), mtl: asset('forest/plane.mtl')}}
          lit
          style={{
            transform: [{scale: [1, 1, 1]}, {translate: [0, -1, 0]}],
          }}
        />
        <Ship/>
      </View>
    );
  }
};

AppRegistry.registerComponent('ReactWroclawVR', () => ReactWroclawVR);
