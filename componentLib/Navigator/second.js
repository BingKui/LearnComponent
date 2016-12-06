'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	TouchableOpacity,
	Text
} from 'react-native';
const USER_MODELS = {
	1: {
		name: 'mot',
		age: 23
	},
	2: {
		name: '晴明大大',
		age: 25
	}
};
class second extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: null
		};
	}
	componentDidMount() {
		//这里获取从FirstPageComponent传递过来的参数: id
		this.setState({
			id: this.props.id
		});
	}
	_pressButton = () => {
		const {
			navigator
		} = this.props;
		if (this.props.getUser) {
			let user = USER_MODELS[this.props.id];
			this.props.getUser(user);
		}
		if (navigator) {
			//很熟悉吧，入栈出栈~ 把当前的页面pop掉，这里就返回到了上一个页面:FirstPageComponent了
			navigator.pop();
		}
	};
	render() {
		return (
			<View>
                <Text>获得的参数: id={ this.state.id }</Text>
                <TouchableOpacity onPress={this._pressButton}>
                    <Text>点我跳回去</Text>
                </TouchableOpacity>
            </View>
		);
	}
}

const styles = StyleSheet.create({

});


export default second;