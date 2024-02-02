import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeStackScreen from './HomeStackScreen';
import ScoreBoardStack from '../screens/ScoreBoardStack';

const Tabs = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="HomeStackScreen" component={HomeStackScreen} />
      <Tabs.Screen name="ScoreBoardStack" component={ScoreBoardStack} />
    </Tabs.Navigator>
  );
};

export default TabNav;
