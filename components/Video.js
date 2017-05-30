import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VideoPano,
  VrButton
} from 'react-vr';

export default class Video extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        confirmation: false
    };
  }

  confirmationOn() {
    this.setState({
      confirmation: true
    })
  }

  confirmationOff() {
    this.setState({
      confirmation: false
    })
  }

  renderConfirmation() {
    return (
      <View>
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
            transform: [{translate: [0, 4, -8]}],
        }}>
            Are you sure you wanna leave this nice place?
        </Text>
        <VrButton
          onClick={()=>this.props.move("CollibraOffice3")}
        >
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
              transform: [{translate: [-4.5, 3.5, -8]}],
              width: 7
            }}>
            Yes, pretty please!
          </Text>
        </VrButton>
        <VrButton
          onClick={()=>this.confirmationOff()}>
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
              transform: [{translate: [2.6, 3.9, -8]}],
              width: 6
            }}>
            No... I'm fine.
          </Text>
        </VrButton>
      </View>
    );
  }

  render() {
    return (
      <View>
        <VideoPano source={{uri: asset('coaster.webm').uri}}/>
        {!this.state.confirmation && <VrButton
          onClick={()=>this.confirmationOn()}>
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
              transform: [{translate: [0, 4, -8]}],
            }}>
            Take me from this place!
          </Text>
        </VrButton>}
        {this.state.confirmation && this.renderConfirmation()}
      </View>
    );
  }
};

