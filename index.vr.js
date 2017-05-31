import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VideoPano
} from 'react-vr';

import CollibraOffice1 from './components/CollibraOffice1';
import CollibraOffice2 from './components/CollibraOffice2';
import CollibraOffice3 from './components/CollibraOffice3';
import Video from './components/Video';
import RifleOnDesert from './components/RifleOnDesert';
import Outland from './components/Outland';

export default class ReactWroclawVR extends React.Component {
  constructor(props) {
    super(props);
    this.state = {view: "CollibraOffice1"};
  }

  render() {
    const Components = { 
      "CollibraOffice1": CollibraOffice1,
      "CollibraOffice2": CollibraOffice2,
      "CollibraOffice3": CollibraOffice3,
      "Video": Video,
      "RifleOnDesert": RifleOnDesert,
      "Outland": Outland
    };
    const Component = Components[this.state.view];

    return (
      <View>
        <Component move={(view) => {this.setState({view: view})}} />
      </View>
    );
  }
};

AppRegistry.registerComponent('ReactWroclawVR', () => ReactWroclawVR);
