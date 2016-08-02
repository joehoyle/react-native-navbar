import React from 'react';
import ReactNative from 'react-native';
const {
  Component,
} = React;

const {
  AppRegistry,
  Text,
  View,
} = ReactNative;

import NavigationBar from 'react-native-navbar';

class Basic extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#ff9900', }}>
        <NavigationBar
          title={{ title: 'Title', }}
          leftButton={{ title: 'Back', }}
          rightButton={{ title: 'Forward', }} />
      </View>
    );
  }
}

AppRegistry.registerComponent('Basic', () => Basic);
