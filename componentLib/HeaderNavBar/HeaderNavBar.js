/**
 * 顶部导航组件
 */
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

const _backBase64 = 'data:image/png;base64,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';
class HeaderNavBar extends Component {
	static defaultProps = {
		onPressLeft: () => {}, //点击返回函数
		onPressRight: () => {}, //右侧事件
		title: '标题', //标题文字
		left: false, //是否显示左侧
		right: false, //是否显示右侧
		rightText: '更多', //右侧文字，最大连个字
		bgColor: '#44abe5'
	};
	static propTypes = {
		onPressLeft: PropTypes.func, //点击返回函数
		onPressRight: PropTypes.func,
		title: PropTypes.string.isRequired,
		left: PropTypes.bool,
		right: PropTypes.bool,
		rightText: PropTypes.string,
		bgColor: PropTypes.string
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
			rightText,
			bgColor
		} = this.props;
		if (left && right) {
			return (
				<View style={[styles.header, {backgroundColor: bgColor}]}>
		        	<TouchableOpacity style={styles.back} onPress={this._onPressLeft}>
			            <Image style={styles.back} source={{uri: _backBase64}}/>
			        </TouchableOpacity>
			        <Text style={styles.headerTitle}>{title}</Text>
			        <TouchableOpacity style={styles.right} onPress={this._onPressRight}>
			            <Text style={styles.rightText}>{rightText}</Text>
			        </TouchableOpacity>
		        </View>
			);
		} else if (left) {
			return (
				<View style={[styles.header, {backgroundColor: bgColor}]}>
		        	<TouchableOpacity style={styles.back} onPress={this._onPressLeft}>
			            <Image style={styles.back} source={{uri: _backBase64}}/>
			        </TouchableOpacity>
			        <Text style={styles.headerTitle}>{title}</Text>
		        </View>
			);
		} else if (right) {
			return (
				<View style={[styles.header, {backgroundColor: bgColor}]}>
			        <Text style={[styles.headerTitle, styles.noLeft]}>{title}</Text>
			        <TouchableOpacity  style={styles.right} onPress={this._onPressRight}>
			            <Text style={styles.rightText}>{rightText}</Text>
			        </TouchableOpacity>
		        </View>
			);
		} else {
			return (
				<View style={[styles.header, {backgroundColor: bgColor}]}>
			        <Text style={[styles.headerTitle, styles.noLeft]}>{title}</Text>
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
		width: _width
	},
	headerTitle: {
		textAlign: 'center',
		width: _width - 70,
		color: '#fff',
		fontSize: 16
	},
	noLeft: {
		marginLeft: 35
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