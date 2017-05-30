import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Model,
  PointLight
} from 'react-vr';

export default class ReactWroclawVR extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('chess-world.jpg')}/>
        <PointLight style={{color:'white', transform:[{translate : [50, 100, 1000]}]}} />
        <Model
          source={{
            obj: asset('sniper-rifle/sniper-rifle.obj')
          }}
          texture={asset('sniper-rifle/textures/Sniper_KSR_29_Col.jpg')}
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

AppRegistry.registerComponent('ReactWroclawVR', () => ReactWroclawVR);
