import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Model
} from 'react-vr';

export default class ReactWroclawVR extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('chess-world.jpg')}/>
        <Model
          source={{
            obj: asset('sniper-rifle/sniper-rifle.obj'),
            mtl: asset('sniper-rifle/sniper-rifle.mtl'),
            texture:asset('sniper-rifle/textures/KSR29sniperrifle_Base_Color.jpg')
          }}
          style={{
            transform: [
              {translate: [0, 0, -7]},
              {scale: 1}
            ]
          }}
          lit={true}
        />
      </View>
    );
  }
};

AppRegistry.registerComponent('ReactWroclawVR', () => SniperRifle);
