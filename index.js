import React from 'react';
import ReactNative from 'react-native';
const {
  Component,
  PropTypes,
} = React;

const {
  PixelRatio,
  StatusBar,
  Text,
  View,
} = ReactNative;

import NavbarButton from './NavbarButton';
import styles from './styles';

const ButtonShape = {
  title: PropTypes.string.isRequired,
  style: PropTypes.any,
  handler: PropTypes.func,
};

const TitleShape = {
  title: PropTypes.string.isRequired,
  tintColor: PropTypes.string,
};

const StatusBarShape = {
  style: PropTypes.oneOf(['light-content', 'default', ]),
  hidden: PropTypes.bool,
  tintColor: PropTypes.string,
  hideAnimation: PropTypes.oneOf(['fade', 'slide', 'none', ]),
  showAnimation: PropTypes.oneOf(['fade', 'slide', 'none', ])
};

function customizeStatusBar(data) {
  if (data.style) {
    StatusBar.setBarStyle(data.style, true);
  }
  const animation = data.hidden ?
    (data.hideAnimation || NavigationBar.defaultProps.statusBar.hideAnimation) :
    (data.showAnimation || NavigationBar.defaultProps.statusBar.showAnimation);

  StatusBar.setHidden(data.hidden, animation);
}

class NavigationBar extends Component {
  componentDidMount() {
    customizeStatusBar(this.props.statusBar);
  }

  componentWillReceiveProps(props) {
    customizeStatusBar(this.props.statusBar);
  }

  getButtonElement(data = {}, style) {
    if (!!data.props) {
      return <View style={styles.navBarButton}>{data}</View>;
    }

    return <NavbarButton
      title={data.title}
      style={[data.style, style, ]}
      tintColor={data.tintColor}
      handler={data.handler} />;
  }

  getTitleElement(data) {
    if (!!data.props) {
      return <View style={styles.customTitle}>{data}</View>;
    }

    const colorStyle = data.tintColor ? { color: data.tintColor, } : null;

    return (
      <Text
        style={[styles.navBarTitleText, colorStyle, data.style, ]}>
        {data.title}
      </Text>
    );
  }

  render() {
    const customTintColor = this.props.tintColor ?
      { backgroundColor: this.props.tintColor } : null;

    const statusBar = !this.props.statusBar.hidden ?
      <View style={[styles.statusBar, ]} /> : null;

    return (
      <View style={[styles.navBarContainer, customTintColor, ]}>
        {statusBar}
        <View style={[styles.navBar, this.props.style, ]}>
          {this.getTitleElement(this.props.title)}
          {this.getButtonElement(this.props.leftButton, { marginLeft: 8, })}
          {this.getButtonElement(this.props.rightButton, { marginRight: 8, })}
        </View>
      </View>
    );
  }

  static propTypes = {
    tintColor: PropTypes.string,
    statusBar: PropTypes.shape(StatusBarShape),
    leftButton: PropTypes.oneOfType([
      PropTypes.shape(ButtonShape),
      PropTypes.element,
    ]),
    rightButton: PropTypes.oneOfType([
      PropTypes.shape(ButtonShape),
      PropTypes.element,
    ]),
    title: PropTypes.oneOfType([
      PropTypes.shape(TitleShape),
      PropTypes.element,
    ]),
  };

  static defaultProps = {
    statusBar: {
      style: 'default',
      hidden: false,
      hideAnimation: 'slide',
      showAnimation: 'slide',
    },
    title: {
      title: '',
    },
  };
}
module.exports = NavigationBar;
