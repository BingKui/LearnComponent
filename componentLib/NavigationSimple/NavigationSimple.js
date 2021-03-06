'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	Navigator
} from 'react-native';

import FirstView from './FirstView';

class NavigationSimple extends Component {
	render() {
		let rootViewName = 'FirstView';
		let rootComponent = FirstView;
		return ( < Navigator initialRoute = {
				{
					name: rootViewName,
					component: rootComponent
				}
			}
			configureScene = {
				(route) => {
					return Navigator.SceneConfigs.HorizontalSwipeJump;
				}
			}
			renderScene = {
				(route, navigator) => {
					let Component = route.component;
					return <Component {...route.params} navigator = {navigator} />
				}
			}
			/>
		);
	}
}

const styles = StyleSheet.create({

});


export default NavigationSimple;