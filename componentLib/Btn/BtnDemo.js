'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	Text,
} from 'react-native';

import Button from './Button';

class BtnDemo extends Component {
	onPress = (callback) => {
		this.timer = setTimeout(() => {
			callback();
		}, 3000);
	}
	componentWillUnmount() {
		// 如果存在this.timer，则使用clearTimeout清空。
		// 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
		this.timer && clearTimeout(this.timer);
	}
	render() {
		return (
			<View>
				<Button onPress = {this.onPress} btnText = "确定" size='small'/><Button onPress = {this.onPress} btnText = "确定"/>
				<Button onPress = {this.onPress} btnText = "确定" size='big'/>
				<Button onPress = {this.onPress} btnText = "确定" size='small' type='redius'/>
				<Button onPress = {this.onPress} btnText = "确定" type='redius'/>
				<Button onPress = {this.onPress} btnText = "确定" size='big' type='redius'/>
				<Button onPress = {this.onPress} btnText = "确定" type='line'/>
				<Button onPress = {this.onPress} btnText = "确定" type='line' bgcolor='#f4ea2a'/>
				<Button onPress = {this.onPress} btnText = "确定" type='line' bgcolor='#d81e06'/>
				<Button onPress = {this.onPress} btnText = "确定" type='line' bgcolor='#d4237a'/>
				<Button onPress = {this.onPress} btnText = "确定" type='line' bgcolor='#1296db'/>
			</View>
		);
	}
}

const styles = StyleSheet.create({

});


export default BtnDemo;