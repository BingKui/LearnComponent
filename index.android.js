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

import BtnDemo from './componentLib/Btn/BtnDemo';

import TabBarDemo from './componentLib/TabBarSimple/Demo';

import NavBarDemo from './componentLib/NavBarRN/Demo';
//测试路由
import NavigatorDemo from './componentLib/Navigator/Demo';

//Demo
import Demo from './componentLib/Demo/NavigatorTop';

//引入公共顶部导航测试
import HeaderDemo from './componentLib/HeaderNavBar/Demo';

//引入Modal组件测试
import ModalDemo from './componentLib/ModalSimple/ModalSimple';
import ModalDemo2 from './componentLib/ModalSimple/Demo';

//Toast提示测试
import ToastDemo from './componentLib/Tips/Demo';

//donghua
import AnimateTip from './componentLib/Tips/Tips';

export default class LearnComponent extends Component {
	render() {
		return (
			<View/>
		);
	}
}
const styles = StyleSheet.create({});

AppRegistry.registerComponent('LearnComponent', () => ToastDemo);