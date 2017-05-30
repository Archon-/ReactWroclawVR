import React from 'react';
import {
  View, 
  Model,
  asset
} from 'react-vr';

export default class Ship extends React.Component {
  frameHandle;
  lastUpdate = Date.now();

  state = {
    rotation: 0
  }

  componentDidMount() {
    this.rotate();
  }

  componentWillUnmount() {
    if (this.frameHandle) {
      cancelAnimationFrame(this.frameHandle);
      this.frameHandle = null;
    }
  }

  rotate = () => {
    const now = Date.now();
    const delta = now - this.lastUpdate;
    this.lastUpdate = now;
    this.setState({
      rotation: this.state.rotation + delta / 150
    });
    this.frameHandle = requestAnimationFrame(this.rotate);
  }

  render() {
    return (
      <View
        style={{
          transform: [
            {translate: [1, 40 , -400]},
            {scale: [0.5, 0.5, 0.5]},
            {rotateY: this.state.rotation}
          ],
        }}
      >
      <Model
        source={{
          obj: asset('forest/ship/Arc170.obj'),
          mtl: asset('forest/ship/Arc170.mtl')
        }}
        lit
      />
      </View>
    )
  }
}