import React from 'react';
import ReactNative from 'react-native';
const {
  Component,
} = React;

const {
  Image,
  TouchableOpacity,
} = ReactNative;

export default class Bulbazavr extends Component {
  render() {
    const bulbazavr = 'http://1.bp.blogspot.com/_rwVhHPI9dhQ/SPeGpxeQiCI/AAAAAAAAAoM/pyVMkLNJfY8/s400/002.gif';
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Image
          source={{ uri: bulbazavr }}
          style={[{ width: 20, height: 20, }, this.props.style]}/>
      </TouchableOpacity>
    );
  }
}
