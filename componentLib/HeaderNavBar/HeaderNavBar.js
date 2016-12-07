'use strict';

import React, {
	Component,
	PropTypes
} from 'react';

import {
	View,
	Image,
	Text,
	StyleSheet,
	Dimensions,
	TouchableOpacity
} from 'react-native';

class HeaderNavBar extends Component {
	static defaultProps = {
		onPressLeft: () => {}, //点击返回函数
		onPressRight: () => {}, //右侧事件
		title: '标题', //标题文字
		left: false, //是否显示左侧
		right: false, //是否显示右侧
		rightText: '更多' //右侧文字，最大连个字
	};
	static propTypes = {
		onPressLeft: PropTypes.func, //点击返回函数
		onPressRight: PropTypes.func,
		title: PropTypes.string.isRequired,
		left: PropTypes.bool,
		right: PropTypes.bool,
		rightText: PropTypes.string
	};
	_onPressLeft = () => {
		this.props.onPressLeft();
	};
	_onPressRight = () => {
		this.props.onPressRight();
	};
	_return = () => {
		const {
			title,
			left,
			right,
			rightText
		} = this.props;
		if (left && right) {
			return (
				<View style={styles.header}>
		        	<TouchableOpacity style={styles.back} onPress={this._onPressLeft}>
			            <Image style={styles.back} source={require('../../image/back.png')}/>
			        </TouchableOpacity>
			        <Text style={styles.headerTitle}>title</Text>
			        <TouchableOpacity style={styles.right} onPress={this._onPressRight}>
			            <Text style={styles.rightText}>{rightText}</Text>
			        </TouchableOpacity>
		        </View>
			);
		} else if (left) {
			return (
				<View style={styles.header}>
		        	<TouchableOpacity style={styles.back} onPress={this._onPressLeft}>
			            <Image style={styles.back} source={require('../../image/back.png')}/>
			        </TouchableOpacity>
			        <Text style={styles.headerTitle}>{title}</Text>
		        </View>
			);
		} else if (right) {
			return (
				<View style={styles.header}>
			        <Text style={[styles.headerTitle, styles.noLeft]}>title</Text>
			        <TouchableOpacity  style={styles.right} onPress={this._onPressRight}>
			            <Text style={styles.rightText}>{rightText}</Text>
			        </TouchableOpacity>
		        </View>
			);
		} else {
			return (
				<View style={styles.header}>
			        <Text style={[styles.headerTitle, styles.noLeft]}>title</Text>
		        </View>
			);
		}
	};
	render() {
		let _el = this._return();
		return (_el);
	}
}
let _width = Dimensions.get('window').width;
const styles = StyleSheet.create({
	header: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		height: 45,
		width: _width,
		backgroundColor: '#44abe5'
	},
	headerTitle: {
		textAlign: 'center',
		width: _width - 90,
		color: '#fff',
		fontSize: 16
	},
	noLeft: {
		marginLeft: 45
	},
	back: {
		width: 35,
		height: 35
	},
	right: {
		width: 35,
		height: 35,
	},
	rightText: {
		height: 35,
		color: '#fff',
		textAlign: 'center',
		textAlignVertical: 'center'
	},
});


export default HeaderNavBar;