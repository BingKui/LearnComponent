'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	Modal,
	Text,
	Dimensions,
	TouchableHighlight
} from 'react-native';

class ModalSimple extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modalVisible: false
		};
	}

	setModalVisible(visible) {
		this.setState({
			modalVisible: visible
		});
	}

	render() {
		return (
			<View>
		        <Modal
		          animationType={"none"}
		          transparent={true}
		          visible={this.state.modalVisible}
		          onRequestClose={() => {alert("Modal has been closed.")}}
		          >
			        <View style={[styles.loadingView]}>
				        <View style={styles.loadItem}>
				            <Text style={styles.loadTitle}>Hello World!</Text>
				            <TouchableHighlight onPress={() => {
				              this.setModalVisible(!this.state.modalVisible)
				            }}>
				              	<Text>Hide Modal</Text>
				            </TouchableHighlight>
				        </View>
				    </View>
		        </Modal>

		        <TouchableHighlight onPress={() => {
		          this.setModalVisible(true)
		        }}>
		          <Text>Show Modal</Text>
		        </TouchableHighlight>

		    </View>
		);
	}
}
let _width = Dimensions.get('window').width;
let _height = Dimensions.get('window').height;
const styles = StyleSheet.create({
	loadingView: {
		flex: 1,
		height: _height,
		width: _width,
		position: 'absolute',
		alignItems: 'center',
		justifyContent: 'center'
	},
	loadItem: {
		width: 120,
		height: 120,
		backgroundColor: '#fff',

	},
	loadTitle: {
		color: '#333'
	}
});


export default ModalSimple;