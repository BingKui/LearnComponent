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
	AppRegistry
} from 'react-native';

//引入需要测试的组件
import ListViewSimple from './componentLib/ListViewSimple/ListViewSimple';

export default class LearnComponent extends Component {
	render() {
		return (
			<ListViewSimple></ListViewSimple>
		);
	}
}

AppRegistry.registerComponent('LearnComponent', () => LearnComponent);