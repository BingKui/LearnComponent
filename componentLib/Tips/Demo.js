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
import Button from '../Btn/Button';
import ToastSuccessAndError from './ToastSuccessAndError';
import Tip from './Tips';

class Demo extends Component {
	_successOnPress = (callback) => {
		this.refs.toast.success();
		this.timer = setTimeout(() => {
			callback();
		}, 2000);
	}
	_errorOnPress = (callback) => {
		this.refs.toast.error();
		this.timer = setTimeout(() => {
			callback();
		}, 2000);
	}
	_tipOnPress = (callback) => {
		this.refs.tip.open();
		this.timer = setTimeout(() => {
			callback();
		}, 2000);
	}
	componentWillUnmount() {
		// 如果存在this.timer，则使用clearTimeout清空。
		// 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
		this.timer && clearTimeout(this.timer);
	}
	render() {
		return (
			<View>
				<Tip ref='tip' type='success' msg='那么用多个变量，或者用个数组来保存引'></Tip>
				<ToastSuccessAndError ref='toast' successMsg='chenggong' errorMsg='cuowu'></ToastSuccessAndError>
				<Button onPress = {this._successOnPress} btnText = "Success" type='line' bgcolor='#09BB07'/>
				<Button onPress = {this._errorOnPress} btnText = "Error" type='line' bgcolor='#d81e06'/>
				<Button onPress = {this._tipOnPress} btnText = "Tip" type='line' bgcolor='#d81e06'/>
			</View>
		);
	}
}

const styles = StyleSheet.create({

});


export default Demo;