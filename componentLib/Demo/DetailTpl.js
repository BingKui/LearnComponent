'use strict';

import React, {
	Component,
	PropTypes
} from 'react';

import {
	StyleSheet,
	View,
	Text
} from 'react-native';

class DetailTpl extends Component {
	static defaultProps = {
		title: '',
		imgUrl: '../../image/loading.gif',
		content: '',
		author: '',
		date: ''
	};
	static propTypes = {
		title: PropTypes.string.isRequired,
		imgUrl: '../../image/loading.gif',
		content: PropTypes.string.isRequired,
		author: PropTypes.string.isRequired,
		date: PropTypes.string.isRequired
	}
	dealString = () => {
		const {
			content
		} = this.props;
		var _conArr = content.match(/<p>.*?<\/p>/g);
		var _imgArr = [];
		for (var i = 0; i < _conArr.length; i++) {
			_imgArr[i] = /\<img.*?>/.test(_conArr[i]);
			if (_imgArr[i]) { //存在图片
				_conArr[i] = _conArr[i].match(/(http:|https:).*?\.(jpg|jpeg|gif|png)/);
			} else {
				_conArr[i] = _conArr[i].replace(/<p>/g, '')
					.replace(/<\/p>/g, '')
					.replace(/<strong>/g, '')
					.replace(/<\/strong>/g, '')
					.replace(/<a.*?>/g, '')
					.replace(/<\/a>/g, '')
					.replace(/<pre>/g, '')
					.replace(/<\/pre>/g, '')
					.replace(/&nbsp;/g, '')
					.replace(/&ldquo;/g, '')
					.replace(/&rdquo;/g, '');
			}
		}
		return _conArr;
	};

	render() {
		return (

		);
	}
}

const styles = StyleSheet.create({

});


export default DetailTpl;