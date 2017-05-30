import React from 'react';
import {
  View,
  Model,
  asset
} from 'react-vr';

export default class Tree extends React.Component {

  render() {
    const initialStyling = {
      transform: [
        { scale: [1, 1, 1] },
      ],
    }

    return (
      <View
        style={{
          transform: [
            {translate: [-60, 4 , 30]},
            {scale: [0.1, 0.1, 0.1]},
            {rotateY: 200}
          ]
        }}
      >
        <Model
          source={{
            obj: asset('forest/farmhouse/Gost_House.obj'),
            mtl: asset('forest/farmhouse/Gost_House.mtl')
          }}
          texture={asset('forest/farmhouse/House_Body.bmp')}
        />
      </View>
    )
  }
}