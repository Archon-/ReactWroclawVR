import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton
} from 'react-vr';

export default class CollibraOffice1 extends React.Component {
  render() {
    return (
      <View>
        <Pano source={{uri: asset('office/CollibraOffice1.jpg').uri}}/>
        <VrButton
          onClick={()=>this.props.move("CollibraOffice2")}
          style={{width: 1, height: 1}}
        >
          <Text
            style={{
              backgroundColor: '#D3D3D3',
              opacity: 0.6,
              fontWeight: '400',
              layoutOrigin: [0.5, 0.5],
              paddingLeft: 0.2,
              paddingRight: 0.2,
              transform: [{translate: [0, -0.4, -6]}, {rotateX: "30deg"}],
              width: 2,
              height: 2
            }}>
          </Text>
        </VrButton>
        <VrButton
          onClick={()=>this.props.move("RifleOnDesert")}
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
              transform: [{translate: [-1, -0.4, -3]}],
            }}>
            Go to desert
          </Text>
        </VrButton> 
        <VrButton
          onClick={()=>this.props.move("Outland")}
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
              transform: [{translate: [1, 0, -6]}],
            }}>
            Go to outland
          </Text>
        </VrButton> 
      </View>
    );
  }
};

