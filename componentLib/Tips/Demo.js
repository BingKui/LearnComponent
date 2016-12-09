'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	Text,
	TouchableHighlight,
} from 'react-native';

import Toast from './Toast';

import ToastSuccessAndError from './ToastSuccessAndError';

class Demo extends Component {
	loading = () => {
		setTimeout(() => {

		}, 1000);
		this.refs.toast.open();
	}
	render() {
		return (
			<View>
				<ToastSuccessAndError ref='toast' successMsg='chenggong' errorMsg='cuowu'></ToastSuccessAndError>
				<TouchableHighlight onPress={() =>{this.refs.toast.success()}}>
					<Text>Success</Text>
				</TouchableHighlight>
				<TouchableHighlight onPress={() =>{this.refs.toast.error()}}>
					<Text>Error</Text>
				</TouchableHighlight>
			</View>
		);
	}
}

const styles = StyleSheet.create({

});


export default Demo;