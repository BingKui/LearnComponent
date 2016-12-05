/**
 * React Native LearnComponent
 * https://github.com/BingKui/LearnComponent
 * @author 康兵奎
 * @data 2016-12-03 15:54:49
 */

import React, {
	Component
} from 'react';
import {
	AppRegistry,
	StyleSheet,
	View
} from 'react-native';

//引入需要测试的组件
import ListViewSimple from './componentLib/ListViewSimple/ListViewSimple';
//引入公共模块
import NavigationSimple from './componentLib/NavigationSimple/NavigationSimple';

import Btn from './componentLib/Btn/Button';

import TabBarDemo from './componentLib/TabBarSimple/Demo';

import NavBarDemo from './componentLib/NavBarRN/Demo';

export default class LearnComponent extends Component {
	onPress = (callback) => {
		this.timer = setTimeout(() => {
			callback();
			alert('执行结束！');
		}, 3000);
	}
	componentWillUnmount() {
		// 如果存在this.timer，则使用clearTimeout清空。
		// 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
		this.timer && clearTimeout(this.timer);
	}
	render() {
		return (
			<View style={styles.container}>
				<Btn onPress={this.onPress} text="确定"></Btn>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
});
AppRegistry.registerComponent('LearnComponent', () => NavBarDemo);