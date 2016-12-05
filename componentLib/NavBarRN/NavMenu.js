'use strict'
import React from 'React';
import {
  Component,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

import NavButton from './NavButton';

const styles = StyleSheet.create({
  navButton: {
    paddingTop: 100,
  }
});

class NavMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      navigator
    } = this.props;
    return (
      <ScrollView>
      <NavButton
        style={styles.navButton}
        onPress={
          ()=>{
            navigator.push({
              message:     'Custome-NavigatorScene',
              name:        'NavigatorBarRNComponent',

            });}
          }
          btnText="Click Push Custome NavigatorScene(Text)"
          />
      </ScrollView>
    );
  }
}

export default NavMenu;