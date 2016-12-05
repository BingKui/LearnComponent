'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	Dimensions,
	View,
} from 'react-native';

import TabItem from './TabItem';

const scale = Dimensions.get('window').scale;

class TabBarSimple extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedItemIndex: -1,
		}
	}

	static defaultProps = {};
	static propTypes = {
		...View.propTypes,
		style: View.propTypes.style,
		onSelectedChange: React.PropTypes.func,
	};

	render() {
		let items = this.refereshItems();
		return (
			<View style={styles.container}>
		        <View style={styles.bindView}>
		          	{this.state.selectedItemBindView}
		        </View>
	        	<View style={[styles.tabBar, this.props.style]}>
	          		{items}
	        	</View>
	      	</View>
		);
	}

	onSelectedChange(index, bindView) {
		if (index !== this.state.selectedItemIndex) {
			this.setState({
				selectedItemIndex: index,
				selectedItemBindView: bindView,
			});
			if (this.props.onSelectedChange) {
				this.props.onSelectedChange(index);
			}
		}
	}

	refereshItems() {
		return React.Children.map(this.props.children, (child, index) => {
			if (child.type === TabItem) {
				if (this.state.selectedItemIndex === -1 && child.props.selected) {
					this.state.selectedItemIndex = index;
					this.state.selectedItemBindView = child.props.children;
				}
				return React.cloneElement(child, {
					onPress: () => this.onSelectedChange(index, child.props.children),
					selected: this.state.selectedItemIndex === index,
				});
			}
			return child;
		});
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	bindView: {
		flex: 1,
		backgroundColor: 'transparent',
	},
	tabBar: {
		borderTopWidth: 1 * 2 / scale,
		borderTopColor: '#ebe9e9',
		height: 49,
		flexDirection: 'row',
		backgroundColor: '#ffffff',
	},
});

TabBarSimple.Item = TabItem;

export default TabBarSimple;