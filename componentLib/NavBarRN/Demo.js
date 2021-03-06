'use strict'
import React from 'React';
import {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TouchableHighlight,
  Navigator,
  ScrollView,
} from 'react-native';

import NavMenu from './NavMenu';
import NavigatorBarRN from './NavigatorBarRN';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  messageText: {
    fontSize: 17,
    fontWeight: '500',
    padding: 15,
    marginTop: 50,
    marginLeft: 15,
  },
  messageTextNav: {
    paddingTop: 100,
    fontSize: 16,
  },
  scene: {
    alignItems: 'center',
  },
  colorTemp: {
    color: '#fff',
  }
});

class Demo extends React.Component {
  render() {
    var componentScene = (
      <ScrollView contentContainerStyle={styles.scene}>
        <Text style={styles.messageTextNav}>{'This is custome NavigatorBar Component'}</Text>
        <TouchableHighlight onPress={() => {alert('...')}}>
          <Text>点击实验</Text>
        </TouchableHighlight>
      </ScrollView>
    );
    return (
      <NavigatorBarRN
        rnTitle="首页"
        componentScene={componentScene}
        rnPushComponent = {NavMenu}
        rnStyle={styles.colorTemp}
        />
    );
  }
}

export default Demo;