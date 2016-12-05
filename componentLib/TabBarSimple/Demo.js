'use strict';

import React, {
	Component
} from 'react';

import {
	StyleSheet,
	View,
	Text,
	ViewPagerAndroid,
} from 'react-native';

import TabBar from './TabBarSimple';
import TabGroup from './TabGroup';

class Demo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedIndex: 3,
			badges: [null, null, ' ', 99],
		}
	}

	render() {
		return (
			<View style={{flex: 1}}>
        <View style={styles.halfContiner}>
          <TabBar>
            <TabBar.Item
              icon={require('../../image/start_normall.png')}
              selectedIcon={require('../../image/start_hightlight.png')}
              selected={true}
              title='title1' >
              <Text>0</Text>
            </TabBar.Item>
            <TabBar.Item
              icon={require('../../image/start_normall.png')}
              selectedIcon={require('../../image/start_hightlight.png')}
              badge=' '
              title='title2' >
              <Text>1</Text>
            </TabBar.Item>
            <TabBar.Item
              icon={require('../../image/start_normall.png')}
              selectedIcon={require('../../image/start_hightlight.png')}
              badge={6}
              title='title3' >
              <Text>2</Text>
            </TabBar.Item>
            <TabBar.Item
              icon={require('../../image/start_normall.png')}
              selectedIcon={require('../../image/start_hightlight.png')}
              badge={999}
              title='title3' >
              <Text>3</Text>
            </TabBar.Item>
          </TabBar>
        </View>

        
      </View>
		);
	}

	onSelectedChange(index) {
		this.viewPager.setPage(index);

		let _badges = this.state.badges;
		if (_badges[index] !== null) {
			_badges[index] = null;
			this.setState({
				badges: _badges,
			});
		}
	}
}

const styles = StyleSheet.create({
	halfContiner: {
		flex: 1,
	}
});


export default Demo;