import React from 'react';
import ReactNative from 'react-native';
const {
  Component,
} = React;

const {
  AppRegistry,
  Text,
  Navigator,
  View,
} = ReactNative;

import NavigationBar from 'react-native-navbar';
import InitialScreen from './components/InitialScreen';

function renderScene(route, navigator) {
  return <route.component route={route} navigator={navigator} />;
}

class Routing extends Component {
  render() {
    const initialRoute = {
      component: InitialScreen
    };

    return (
      <View style={{ flex: 1, }}>
        <Navigator
          initialRoute={initialRoute}
          renderScene={renderScene}/>
      </View>
    );
  }
}

AppRegistry.registerComponent('Routing', () => Routing);
