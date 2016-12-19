'use strict';

import React, {
	Component,
	PropTypes
} from 'react';

import {
	StyleSheet,
	View,
	TextInput
} from 'react-native';

class Imput extends Component {
	constructor(props) {
		super(props);

		this.state = {
			flag: false
		};
	}
	static propTypes = {
		maxLength: PropTypes.number,
		placehol: PropTypes.string,
		focusBorderColor: PropTypes.string,
		type: PropTypes.oneOf(['text', 'number', 'email']),
	}
	static defaultProps = {
		maxLength: 1000, //默认最大长度
		placehol: '',
		focusBorderColor: '#44abe5', //获取焦点，边框颜色
		type: 'text', //输入框的类型，以此来判断弹出什么类型的键盘
	}
	render() {
		let {
			flag
		} = this.state;
		let {
			focusBorderColor,
			maxLength
		} = this.props;
		return (
			<View style={[styles.inputView, flag ? { borderColor:focusBorderColor }: {}]}>
				<TextInput
		          style = {styles.inputItem}
		          maxLength={maxLength}
		          onFocus={() => {this.setState({flag:true})}}
		          onBlur={() => {this.setState({flag:false})}}
		          placeholder='输入相应的值...'
		          underlineColorAndroid='transparent'
		          onChangeText={() => {}}
		        />
			</View>

		);
	}
}

const styles = StyleSheet.create({
	inputView: {
		borderColor: '#ccc',
		borderWidth: 1,
		margin: 10
	},
	inputItem: {
		height: 40,
	},

});


export default Imput;