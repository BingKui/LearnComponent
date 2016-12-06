'use strict';

import React, {
	Component,
	PropTypes
} from 'react';

import {
	View,
	Text,
	Image,
	Navigator,
	StyleSheet,
	ScrollView,
	TouchableOpacity,
	TouchableHighlight
} from 'react-native';

/**
 * 主要导出
 */
class NavBar extends Component {
	render() {
		return (
			<View />
		);
	}
}
/**
 * 按钮
 */
class navbtn extends Component {
	//设置默认值props
	static defaultProps = {
		onPress: () => {},
		underbgColor: '#B5B5B5'
	};
	//定义props属性，和必须性
	static propTypes = {
		onPress: PropTypes.func.isRequired, //点击事件
		btnText: PropTypes.string.isRequired, //按钮内容
		underbgColor: PropTypes.string,
	};
	render() {
		const {
			btnText,
			onPress,
			underbgColor
		} = this.props;
		return (
			<TouchableHighlight 
				underlayColor={underbgColor}
				onPress={onPress}
		        style={styles.button}>
		        <Text style={styles.buttonText}>
		          	{btnText}
		        </Text>
		    </TouchableHighlight>
		);
	}
}
const styles = StyleSheet.create({
	button: {
		backgroundColor: 'white',
		padding: 15,
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderBottomColor: '#CDCDCD'
	},
	buttonText: {
		fontSize: 16,
		paddingTop: 100,
	},
});


export default NavBar;