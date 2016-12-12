/**
 * 提供各种类型提示
 */
'use strict';

import React, {
	Component,
	PropTypes
} from 'react';

import {
	StyleSheet,
	View,
	Animated,
	Easing,
	Text,
	Dimensions,
	Image,
	Modal,
} from 'react-native';

const _width = Dimensions.get('window').width;
//定义各种提示的图标，类型有success(成功)、warning(警告)、wrong(错误)、help(帮助信息)、info(提示信息)
const _warning = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAE9klEQVR4Xu2aTVITQRTH3xsNVcCk1CoJS+OO4MJwAuEE6gmEEwgnUE5gPIF4AvAE4gnAhYQdYUmwCqyMpEpwntUzmdDTmcn056iBbCfT0+/X/35f3Qg3/Ic33H64BXCrgBtO4K9uATqr38cHnfO/uQalAmAGX1zNvA4J1hHgPmf41p1KuDn94LBTNozSAATdJ02gcBsQ61lGEsA5Qrjh1w63yoRQCoD+2UL96tLbE1Y900706OXsw/ZOWRCcA2Cy/3k58xkAmolRRLDpT1202P4PugurBNhCwHvseawEXPFr3/bLgOAcQO9k8S0ivLk2JlwTZc62B0G4m0AAoF2/1l757wEw6f++9I6uDaH3fq29nmXYz++NFxTi9vAZ0oY/1265huBUAUG38RkAlyMjiI5np/rNcWGvd7K4gwjPk61wtxIuuY4MzgCwvQ3gfUhWUMa5MX8RXE53hv6AaKc6337pUgVOAMSGzBwlXp8IPlXnD17IGKIDTmbcvP84ARB0G1sA+CqWMv24W6GmipR73QZziM+SreBXLh67yhitA+idLiwjeSzsxT8NZxbnDbjPRYVc52my+tH0TAcQ3w+6i3tczP/q1w6G8Z//b6wSeATgbWTFfDF8EoYr1bnDXdvztQpAdtK8SgjoS7XWjiOF8Au6iywZejqIIp3Zqf6S7a1gDcBoupsf8+UBPGkCEFPUgAFsVucP3tpUgTUAfMxnjs+v9Ot5qyULgBkadBstAHx9bTQu2UyTrQAQs7iimK8CIKolfk3vA+KjAYR9v3awZEsFxgAGE9xLytxxezqZtAoA9o6NyJIHzBgAL1HZmK8KYLAVuNwCzm2lyUYAoiaHhpPSASCmybYqRkMAXMwnOvbn25ndHlF+OgDYGKq+RsZPaAMIThvrQPhuGKIUEhVdAJE/sJwmawEQix0A+ujX2qsyxEWnJuM0+XEz0mSlb4tz1ALQO2lsI2JU3RXF/CwoJgqIHKKB+owBjIQkGG1xFSnBFEAcFeykyUoK0In5LhQQA9CLQEYKGG1w6qWlNhQQ+ZKRhqv6fKQVYIu4qRPkV9BGmqwAQK3BOc4P2FJAVprMzhxUKkYpAGKfzrQ5YROAaZpcCMCkwZmnAtsATNLkQgCmDU5XUUAcd+RgRTI8jwXgqgy1rYBhmS0crMh0k8cCCE4aR9xxdm6DsyjxsVUMFX1HTJNJ4mAlF4CNGJs34fRE83uHRQZnPVdNkzMBqDQ4dSbJ3om+cQV1F61uvmKEAl+QCUClwakLwOV7UVT4NbOFSJ280+jk+yMAXDQdXBprOnYKwEjMH3NoYfLh5NYIAdQ9j9bKvBIzthjSaXDqgHAVBnXmMlSAzWKnaCL/KAC9BmeRsWVlguPmMVjcD0TU8af6a/yJVaQA1dipYzT/TtkK4NN5sX+Jpg1OHRjlA0hf1+GrWeRLXZ0Gpw6AdCNDvaeo881UDxFgeL6I/M0sALtpqc5EXb0jOvnkABf5Gx1Fp7quJlfWuFm+gAEY3sKYdAB8lpscyKS2gEz5WNZqufhOKs0fnGWmnGD8UdpFD1sU4rHNmxguDJIds3+68Ow3QZ3Aa4l3F6M8IF0+yg77f/8vCYURgOvyMb6nO8k/FuoRaD25sZ6qBuMEBVeBYJm7kzMpPL6y7X2nQi3+1mphV3hSrM+z4xbApK9wkX23CigiNOnPb7wC/gA2T99uWxdAogAAAABJRU5ErkJggg==';
const _success = 'data:image/png;base64,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';
const _wrong = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAHRUlEQVR4Xt1bXXLbNhD+lnYd0S91D9CJc4IqJ4h8gtgnMKQcwPYJmpwgynsrwTN5j3OCyNMDRD1B7OkBYr9YThpzO4BABgRJkQRJ2SkfJRLAftifD4tdQscPC7HzlehZRNxnoE+MHQC7IOympmZcALhgwhUB84BpvsV8TlJedblE6mLwr0L0vwU4BGNAhH6TOZgxB2G2GeF0S8p5k7Hyvm0NALXTX4BDJhxndretVTMuiDF+BJy2pRmNAVCC3wY4YsYxkVbvvOdS7SQR5gFhHt0hV62DDexEjD4z+kZzHucNxowrIox7Ed40BaIRAIvh8JDB41zBGecgSESYhVIq+679LITYRYABGAKEZ+4AGgjQcTidntYe3HzgBYBeGGEKwsCZ+BrAGBGkr9BFghgwBIBjAD87DnQGxtBnztoAfHkh9u8iTJ1d14L3IoybqmTZThqTUyCkgFDasBFg+OhPeVY2hv1/LQBuRuI1LSdOHma8Dxmia8FdoZRGMEGZ3/PUeoDx9kSeVAWhMgCLkZgCUCoYP9cBQdRFvOrCqr6nNDJiSMcsZDiRwypjVALgZiTeEbAfD8jA3xRh38fmqiyq7jtaGwKcEfCbtcaz7Yk8KBurFAB35+9L5csE0b6BcOZEi1JNWAnAzVAoGzv6bvA4DafSNoOyda39/8VQSBAOE01gvNmeypTfquQEjW29s4Q/D6fSDXtrF7DKhIuhmNmaEBAOinxVrgYYD/sxDnXK5sMIg3V7+irC5r2jzGERYBb7BE2YGE/zfFY+AEPxwSI514jQfygOryoohjipw9OSNDFm4VTuud9nAFiMhLJxFfL0s0p9qi7mvt7LmDEwDCdShczkSQGgVYfwKVF9xvvtqUzC330J0mTem6E4i8mSMoWQ8cQ25RQAi5F4CeB3M+EPqfouWBlTAF6FE6nk1E8CgLv7cF6sswsqIXIHXLXtNxZCDHrAvK4ztjfW1YIEgNuROGbgdbz7vQi7dSdS38aTmTP7iWtzdYC0343je54al41pDlDqSK4dIgEnvYkcpzRgMRSfrExOSk3KJrD/t21O/b4R4WnTVJZLbhBhL5RyVmddKfNmXIRT+SQBQKtsgI/JgBGe+KqvGUstTqOtdmyTsecLQkZ49mOjxhd8imWMN0abQIryMhozvrZAaEv4WGibIbKhyDEAivXF2dtMrKyjavG7TUHIcPoW2KjNcVSOcnsqn5JxEJ/bUH8XKF8QuhBeO+hljjExg16EX8hhS5fhRKYvLHy23/qmLghdCZ+YwUioaKCzzYrlkhMjO2F+VUHoWnjj7xJmqLgOOWHLO/yVKYp7xnCjwzqEt3mKiVDvyfaMXR98ikC4W94mfU9itODwijYktQbGuQLgOwHyIBhlO+/+74IA5q8AbcWkvOvcg6LTCPDBaMBc+QC2IkBthlUXAKOGqSM3zAqYuk+82ABoJmgD0AZtrQrIYnT4B0AvkvcZd5v/ftv76e3bv6qO4fPeSgB8OLbXIpykSzxGU9pcZS33DkDGEYL/IdCv6wLBAeBamUBCDLrWgKzwS5u/DfSlS5KGUzQ1ZOz5HMfLtCAFgIkCSQq5yzBYJHwsZE6I7ASETBhcBxHKhD7gsheh7+7wOkBwmW/nVDhH+OuNCIOi/EDXIDiXJq/ShyErU1JmS1X+ryu8dWBJ8YQ2fcLNUHxOahsi7HV2HPYVvksQ3ONwOJG0TIiMxNy6Wm6cEGkqfAyCk6hV6bVGjtEeT1Hu7Yns56XEcq+Qqqi8prkW1zbfrLT5snFzbnt1Jqfsu7z/b4YiyXylUmJtJkUdJ9NI+MQcnCtvH77iqj9M4je5F0gRogaXIlaGqRXhYxDixK3vadFO/Mbqrw9Defbmc/ngo5Lr+sa99cq9GHFvT5pcja1LsKrzuHee9q1X4eXoqqKCqhM/hPcytl90OaoW62oBA5UqrR6CoEVrcOqcMlnv/3WBhA7L6QiyukDCCjvJCfFHNwXjAF8GhIv4RtjWlsIiKQRI6muaMrCHbCKFdYI5ZXKNGOJDBaFeoSRQWnn5UAUtWld5qaxLQxmzHuOgi3TVfYBXCoA+LVqVVjpcqvYXxoFvEUXbgppiaVXKf9WLcFJncyoBkBNOdOWHT4NC28LfCnEUEV7GSQ6b5laZqzIARhPSxdO6ABNnFOFk3dpQ2LZT83qvFgAKhLwGhTa7uMp2bUWXmlcDR20AtDksm6ZUWXqqkysGAhFO29YIw+lVEWe2XF91qDGEz5xeACSMcXnFpert0l1c2lNiBpAE87nPwtQQJlHznBn7BR2oqlnruEktYiMArANUposrpcqse4JV3nEOJt0jnKvqxLofQfUYm7bbokbM1rrUGgMQC6JbZwOou3YFRm7HZ5l9V/j/koDxowiyTqhbNW5rANiT6OZp0t2eA7uRqYKAmVdU+kqZ0yZD+hZbrh0Ae0LdPr+BQdITDOyYklxXS67BmDN0X7DuMd66w6ytnS4C4T+OichOJkOkogAAAABJRU5ErkJggg==';
const _help = 'data:image/png;base64,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';
const _info = 'data:image/png;base64,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';
const _iconArray = [_success, _info, _help, _warning, _wrong];

class Tips extends Component {
	constructor(props) {
		super(props);
		this.state = {
			top: new Animated.Value(-45),
			flag: false,
			type: this.props.type
		};
	}
	static defaultProps = {
		type: 'info',
		msg: '提示信息',
		timeout: 2000
	};
	static propTypes = {
		type: PropTypes.oneOf(['success', 'info', 'help', 'warning', 'wrong']).isRequired, //类型
		msg: PropTypes.string.isRequired, //提示信息
		timeout: PropTypes.number //关闭时间，默认2000毫秒
	}
	componentDidUpdate() {
		let _animate = Animated.sequence([
			Animated.timing(this.state.top, {
				toValue: 0, // 目标值
				duration: 400, // 动画时间
				easing: Easing.linear // 缓动函数
			}),
			Animated.delay(this.props.timeout),
			Animated.timing(this.state.top, {
				toValue: -45, // 目标值
				duration: 400, // 动画时间
				easing: Easing.linear // 缓动函数
			})
		]);
		if (this.state.flag) {
			_animate.start();
			this.timer = setTimeout(() => {
				this.setState({
					flag: false
				});
			}, this.props.timeout + 800);
		}
	}
	componentWillUnmount() {
		this.timer && clearTimeout(this.timer);
	}
	getIconUri = () => {
		const {
			type
		} = this.state;
		const _arr = ['success', 'info', 'help', 'warning', 'wrong'];
		return _iconArray[_arr.indexOf(type)];
	}
	changeType = (_type) => {
		this.setState({
			type: _type ? _type : 'success'
		});
	}
	open = () => {
		this.setState({
			flag: true
		});
	}
	render() {
		return (
			<Animated.View style={[styles.tip, {top:this.state.top}]}>
				<Image 
	            	source={{uri: this.getIconUri()}}
	            	resizeMode={Image.resizeMode.contain}
	      			style={styles.thumbnail}/>
				<Text style={styles.text}>{this.props.msg}</Text>
			</Animated.View>
		);
	}
}

const styles = StyleSheet.create({
	tip: {
		flex: 1,
		position: 'absolute',
		height: 45,
		width: _width,
		backgroundColor: 'rgb(255,253,235)',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		overflow: 'hidden',
		zIndex: 9999
	},
	thumbnail: {
		width: 26,
		height: 26,
		marginRight: 10,
	},
	text: {
		width: _width - 60,
		fontSize: 16
	}
});


export default Tips;