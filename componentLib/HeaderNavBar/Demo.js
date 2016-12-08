'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
} from 'react-native';

import HeaderNavBar from './HeaderNavBar';

class Demo extends Component {
	_onPress = () => {
		alert('left');
	};
	render() {
		return (
			<HeaderNavBar left onPressLeft={this._onPress} title='这个是title'/>
		);
	}
}

const styles = StyleSheet.create({

});


export default Demo;