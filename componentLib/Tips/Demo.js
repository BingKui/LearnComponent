'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	Text,
	TouchableHighlight,
	TextInput,
} from 'react-native';

import Toast from './Toast';
import Button from '../Btn/Button';
import ToastSuccessAndError from './ToastSuccessAndError';
import Tip from './Tips';

class Demo extends Component {
	constructor(props) {
		super(props);

		this.state = {
			tipType: 'success',
			toastType: 'success'
		};
	}
	_successOnPress = (callback) => {
		this.refs.toast_su.success();
		this.timer = setTimeout(() => {
			callback();
		}, 2000);
	}
	_errorOnPress = (callback) => {
		this.refs.toast_su.error();
		this.timer = setTimeout(() => {
			callback();
		}, 2000);
	}
	_tipOnPress = (callback) => {
		this.refs.tip.changeType(this.state.tipType);
		this.refs.tip.open();
		this.timer = setTimeout(() => {
			callback();
		}, 2000);
	}
	_toastOnPress = (callback) => {
		this.refs.toast.changeType(this.state.toastType);
		this.refs.toast.open();
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
				<Tip ref='tip' type='success' msg='这个是提示内容！'></Tip>
				<ToastSuccessAndError ref='toast_su' successMsg='chenggong' errorMsg='cuowu'></ToastSuccessAndError>
				<Toast ref='toast' type='success' msg='这个是提示内容！'></Toast>
				<Button onPress = {this._successOnPress} btnText = "Success" type='line' bgcolor='#09BB07'/>
				<Button onPress = {this._errorOnPress} btnText = "Error" type='line' bgcolor='#d81e06'/>
				<Text style={styles.tipinfo}>输入相应的类型，弹出提示，类型一共五种（success,wrong,help,info,warning），默认为：success</Text>
				<TextInput
		          style={{height: 40}}
		          placeholder="输入tip类型"
		          onChangeText={(tipType) => this.setState({tipType})}
		        />
				<Button onPress = {this._tipOnPress} btnText = "Tip" type='line'/>
				<TextInput
		          style={{height: 40}}
		          placeholder="输入toast类型"
		          onChangeText={(toastType) => this.setState({toastType})}
		        />
				<Button onPress = {this._toastOnPress} btnText = "Toast" type='line'/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	notCon: {
		height: 200
	},
	tipinfo: {
		padding: 10,
		fontSize: 20
	}
});


export default Demo;