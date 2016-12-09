/**
 * 主页面，进入应用看到的页面
 */
import React, {
	Component
} from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableHighlight,
	Image
} from 'react-native';

import ArticleList from './ArticleList';
import Header from '../HeaderNavBar/HeaderNavBar';

export default class MainScene extends Component {
	render() {
		return (
			<View>
		        <Header title='uiseed.cn'></Header>
		        <ArticleList navigator={this.props.navigator}></ArticleList>
      		</View>
		)
	}
}
let Dimensions = require("Dimensions");
let _width = Dimensions.get('window').width;
var styles = StyleSheet.create({
	header: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		height: 45,
		width: _width,
		backgroundColor: '#44abe5'
	},
	headerTitle: {
		textAlign: 'center',
		width: _width,
		color: '#fff',
		fontSize: 16
	},
	back: {
		width: 35,
		height: 35
	}
});