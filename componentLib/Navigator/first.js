'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity
} from 'react-native';

import Second from './second';

class first extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: 2,
			user: null
		};
	}
	_pressButton = () => {
		const {
			navigator
		} = this.props;
		let _th = this;
		//为什么这里可以取得 props.navigator?请看上文:
		//<Component {...route.params} navigator={navigator} />
		//这里传递了navigator作为props
		if (navigator) {
			navigator.push({
				name: 'Second',
				component: Second,
				params: {
					id: this.state.id,
					getUser: function(user) {
						_th.setState({
							user: user
						});
					}
				}
			})
		}
	};
	render() {
		if (this.state.user) {
			return (
				<View>
                    <Text>用户信息: { JSON.stringify(this.state.user) }</Text>
                </View>
			);
		} else {
			return (
				<View>
                    <TouchableOpacity onPress={this._pressButton.bind(this)}>
                        <Text>查询ID为{ this.state.id }的用户信息</Text>
                    </TouchableOpacity>
                </View>
			);
		}

	}
}

const styles = StyleSheet.create({

});


export default first;