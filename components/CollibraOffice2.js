import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton
} from 'react-vr';

export default class CollibraOffice2 extends React.Component {
  render() {
    return (
      <View>
        <Pano source={{uri: asset('office/CollibraOffice2.jpg').uri}}/>
        <VrButton
          onClick={()=>this.props.move("CollibraOffice3")}
          style={{width: 1, height: 1}}
        >
          <Text
            style={{
              backgroundColor: '#D3D3D3',
              opacity: 0.6,
              layoutOrigin: [0.5, 0.5],
              paddingLeft: 0.2,
              paddingRight: 0.2,
              transform: [{translate: [0.4, 0, -8]}, {rotateX: "30deg"}],
              width: 2,
              height: 2
            }}>
          </Text>
        </VrButton>
        <VrButton
          onClick={()=>this.props.move("CollibraOffice1")}
          style={{width: 1, height: 1}}
        >
          <Text
            style={{
              backgroundColor: '#D3D3D3',
              opacity: 0.6,
              layoutOrigin: [0.5, 0.5],
              paddingLeft: 0.2,
              paddingRight: 0.2,
              transform: [{translate: [1, 1, 8]}],
              width: 2,
              height: 2
            }}>
          </Text>
        </VrButton> 
      </View>
    );
  }
};

