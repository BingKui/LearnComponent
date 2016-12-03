'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	Text,
	ListView,
	ProgressBarAndroid
} from 'react-native';

//导入组件
import Item from './Item';
//定义数据地址
const REQUEST_URL = 'http://uiseed.cn/?json=1&count=30';

class ListViewSimple extends Component {
	constructor(props) {
		super(props); //这一句不能省略，照抄即可
		this.state = {
			dataSource: new ListView.DataSource({
				rowHasChanged: (row1, row2) => row1 !== row2,
			}),
			loaded: false
		};
		// 在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向不对
		// 像下面这行代码一样，在constructor中使用bind是其中一种做法（还有一些其他做法，如使用箭头函数等）
		this.fetchData = this.fetchData.bind(this);
	}
	componentDidMount() {
		//组件加载完成
		this.fetchData();
	}
	fetchData() {
		//获取数据
		fetch(REQUEST_URL)
			.then((response) => response.json())
			.then((responseData) => {
				// 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
				this.setState({
					dataSource: this.state.dataSource.cloneWithRows(responseData.posts),
					loaded: true
				});
			});
	}
	renderLoadingView() {
		return (
			<View style={styles.container}>
				<ProgressBarAndroid styleAttr="Inverse" />
		        <Text>数据加载中...</Text>
	      	</View>
		);
	}
	renderMovie(item) {
		return (
			<Item title={item.title} imgUrl={item.thumbnail}></Item>
		);
	}
	render() {
		if (!this.state.loaded) {
			return this.renderLoadingView();
		}
		return (
			<ListView
		        dataSource={this.state.dataSource}
		        renderRow={this.renderMovie}
		        style={styles.listView}
		    />
		);
	}
}

const styles = StyleSheet.create({
	listView: {
		backgroundColor: '#F5FCFF'
	}
});


export default ListViewSimple;