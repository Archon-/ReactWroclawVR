import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
  PointLight,
  Model
} from 'react-vr';

export default class RifleOnDesert extends React.Component {
    constructor(props) {
      super(props);
      this.state = {skin: 4};
    }

  randomSkin() {
      console.log("skinchanged ", this.state.skin);
    this.setState(() => {
      return {
        skin: Math.floor(Math.random()*6) + 0
      };
    })
  }

  render() {
    const skins = [
      'KSR29sniperrifle_Base_Color',
      'Sniper_KSR_29_Col.jpg',
      'KSR29sniperrifle_low_Material.005_AmbientOcclusion',
      'KSR29sniperrifle_Normal_OpenGL',
      'KSR29sniperrifle_Roughness',
      'Sniper_KSR_29_nor',
      'Sniper_KSR_29_spec'
    ];

    return (
      <View>
        <Pano source={{
          uri: [
            asset(`desert/RIGHT.jpg`).uri,
            asset(`desert/LEFT.jpg`).uri,
            asset(`desert/TOP.jpg`).uri,
            asset(`desert/DOWN.jpg`).uri,
            asset(`desert/BACK.jpg`).uri,
            asset(`desert/FRONT.jpg`).uri 
          ] 
        }} />
        <VrButton
          onClick={()=>this.props.move("CollibraOffice1")}>
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
              transform: [{translate: [-7, -3, -5]}, {rotateY: "30deg"}],
            }}>
            Go back to office
          </Text>
        </VrButton> 
        <VrButton
          onClick={()=>this.randomSkin()}>
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
              transform: [{translate: [0, -3, -5]}],
            }}>
            Change skin
          </Text>
        </VrButton>  
        <PointLight style={{color:'white', transform:[{translate : [50, 100, 300]}]}} />
        <Model
          source={{
            obj: asset('sniper-rifle/sniper-rifle.obj')
          }}
          texture={asset(`sniper-rifle/textures/${skins[this.state.skin]}.jpg`)}
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
