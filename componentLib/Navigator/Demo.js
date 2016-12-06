'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	Navigator
} from 'react-native';

import FirstDemo from './first';

class Demo extends Component {
	render() {
		let defaultName = 'FirstDemo';
		let defaultComponent = FirstDemo;
		return ( < Navigator initialRoute = { //定义首页显示的组件
				{
					name: defaultName,
					component: defaultComponent
				}
			}
			configureScene = {
				(route) => {
					return Navigator.SceneConfigs.VerticalDownSwipeJump;
				}
			}
			renderScene = {
				(route, navigator) => {
					let Component = route.component;
					return <Component {...route.params} navigator={navigator} />
				}
			}
			/>
		);
	}
}

const styles = StyleSheet.create({

});


export default Demo;