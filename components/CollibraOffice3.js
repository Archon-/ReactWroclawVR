import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
  Video
} from 'react-vr';

export default class CollibraOffice3 extends React.Component {
  render() {
    return (
      <View>
        <Pano source={{uri: asset('office/CollibraOffice3.jpg').uri}}/>
        <VrButton
          onClick={()=>this.props.move("CollibraOffice2")}
          style={{width: 1, height: 1}}
        >
          <Text
            style={{
              backgroundColor: '#D3D3D3',
              opacity: 0.8,
              layoutOrigin: [0.5, 0.5],
              paddingLeft: 0.2,
              paddingRight: 0.2,
              transform: [{translate: [-28, 0, -4]}, {rotateY: "90deg"}],
              width: 3,
              height: 3
            }}>
          </Text>
        </VrButton> 
        <VrButton onClick={() => {this.props.move("Video")}}>
            <Video 
            style={{
                width: 28.0,
                height:18.0,
                transform: [{translate: [-26.2, 16, -63.7]}, {rotateY: "4deg"}]
            }} 
            source={{uri: asset('coaster.webm').uri}} 
            />
        </VrButton>
      </View>
    );
  }
};

