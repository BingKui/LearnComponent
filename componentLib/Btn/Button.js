'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	TouchableOpacity,
	Text
} from 'react-native';

class Button extends Component {
	constructor(props) {
		super(props); //这一句不能省略，照抄即可
		this.state = {
			disabled: false
		};
	}
	onClick = () => {
		const {
			onPress
		} = this.props;
		this.disable();
		onPress(this.enable);
	}
	enable = () => {
		this.setState({
			disabled: false
		});
	}
	disable = () => {
		this.setState({
			disabled: true
		});
	}
	render() {
		const {
			text
		} = this.props;
		return (
			<TouchableOpacity 
				disabled={this.state.disabled} 
				onPress={this.onClick} 
				style={[styles.btn, this.state.disabled && styles.disabled]}>
				<Text style={styles.btnText}>{text}</Text>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	btn: {
		height: 40,
		width: 100,
		borderRadius: 20,
		backgroundColor: 'green',
		justifyContent: 'center'
	},
	btnText: {
		color: '#fff',
		textAlign: 'center',
		fontSize: 16
	},
	disabled: {
		backgroundColor: 'gray'
	},
});


export default Button;