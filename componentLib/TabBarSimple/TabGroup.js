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

class TabGroup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedItemIndex: -1,
		};
	}
	static defaultProps = {};
	static propTypes = {
		...View.propTypes,
		style: View.propTypes.style,
		onSelectedChange: React.PropTypes.func,
	};
	onSelectedChange(index) {
		if (index !== this.state.selectedItemIndex) {
			this.setState({
				selectedItemIndex: index,
			});

			if (this.props.onSelectedChange) {
				this.props.onSelectedChange(index);
			}
		}
	}
	refereshItem() {
		return React.Children.map(this.props.children, (child, index) => {
			if (child.type === TabItem) {
				if (this.state.selectedItemIndex === -1 && child.props.selected) {
					this.state.selectedItemIndex = index;
				}
				return React.cloneElement(child, {
					onPress: () => this.onSelectedChange(index),
					selected: this.state.selectedItemIndex === index,
				});
			}
			return child;
		});
	}
	render() {
		let children = this.refereshItem();
		return (
			<View style={[styles.tabGroup, this.props.style]}>
        		{children}
      		</View>
		);
	}
}

const styles = StyleSheet.create({
	tabGroup: {
		borderTopWidth: 1 * 2 / scale,
		borderTopColor: '#ebe9e9',
		height: 49,
		flexDirection: 'row',
		backgroundColor: '#ffffff',
	},
});

TabGroup.Item = TabItem;

export default TabGroup;