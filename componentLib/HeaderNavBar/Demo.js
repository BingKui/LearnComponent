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
			<HeaderNavBar left right onPressLeft={this._onPress}/>
		);
	}
}

const styles = StyleSheet.create({

});


export default Demo;