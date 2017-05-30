import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton
} from 'react-vr';

export default class ReactWroclawVR extends React.Component {
    constructor(props) {
      super(props);
      this.state = {view: "alps"};
    }

  switchView() {
    const newState = this.state.view === "alps" ? "desert" : "alps";
    console.log("switching", newState);
    this.setState(() => {
      return {
        view: this.state.view === "alps" ? "desert" : "alps"
      };
    });
  }

  render() {
    const {view} = this.state;
    const oppositView = view === "alps" ? "desert" : "alps";

console.log(view);
    return (
      <View>
        <Pano source={{
          uri: [
            asset(`${view}/RIGHT.jpg`).uri,
            asset(`${view}/LEFT.jpg`).uri,
            asset(`${view}/TOP.jpg`).uri,
            asset(`${view}/DOWN.jpg`).uri,
            asset(`${view}/BACK.jpg`).uri,
            asset(`${view}/FRONT.jpg`).uri 
          ] 
        }} />
        <VrButton
          onClick={()=>this.switchView()}>
          <Text
            style={{
              backgroundColor: '#222222',
              color: '#509e2f',
              borderRadius: 0.2,
              fontSize: 0.8,
              fontWeight: '400',
              layoutOrigin: [0.5, 0.5],
              paddingLeft: 0.2,
              paddingRight: 0.2,
              textAlign: 'center',
              textAlignVertical: 'center',
              transform: [{translate: [0, 0, -8]}],
            }}>
            Go to {oppositView}
          </Text>
        </VrButton>  
      </View>
    );
  }
};

AppRegistry.registerComponent('ReactWroclawVR', () => ReactWroclawVR);
