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
		姓名: '小明',
		性别: '男'
	},
	2: {
		姓名: '韩梅梅',
		性别: '女'
	}
};

class SecondView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: null
		};
	}

	componentDidMount() {
		this.setState({
			id: this.props.id
		});
	}

	onPressButton() {
		const {
			navigator
		} = this.props;

		if (this.props.getUser) {
			let user = USER_MODELS[this.props.id];
			this.props.getUser(user);
		}

		if (navigator) {
			navigator.pop();
		}
	}
	render() {
		return (
			<View style={styles.container}>
		        <Text style={styles.welcome}>
		          	要查询的学生id为：{ this.state.id }
		        </Text>
		        <TouchableOpacity onPress={this.onPressButton.bind(this)}>
			        <Text style={styles.welcome}>
			            点击返回学生信息
			        </Text>
		        </TouchableOpacity>
		    </View>
		);
	}
}

const styles = StyleSheet.create({

});


export default SecondView;