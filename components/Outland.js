import React from 'react';
import {
  AppRegistry,
  View,
  Pano, 
  Model,
  AmbientLight,
  PointLight,
  DirectionalLight,
  asset,
  VrButton,
  Text
} from 'react-vr';
import Ship from  "./forest/Ship"
import House from "./forest/House";

export default class Outland extends React.Component {
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
        <House />
        <Ship/>
        <Model
          source={{obj: asset('forest/plane.obj'), mtl: asset('forest/plane.mtl')}}
          lit
          style={{
            transform: [{scale: [1, 1, 1]}, {translate: [0, -1, 0]}],
          }}
        />
        <VrButton
          onClick={()=>this.props.move("CollibraOffice1")}
          style={{width: 1, height: 1}}
        >
          <Text
            style={{
              backgroundColor: '#222222',
              color: '#509e2f',
              borderRadius: 0.05,
              fontWeight: '400',
              layoutOrigin: [0.5, 0.5],
              paddingLeft: 0.2,
              paddingRight: 0.2,
              transform: [{translate: [1, 0, -1]}, {rotateY: "-30deg"}],
            }}>
            Go to office
          </Text>
        </VrButton> 
      </View>
    );
  }
};
