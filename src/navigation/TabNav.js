import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeStackScreen from './HomeStackScreen';
import TaskStackScreen from './TaskStackScreen';
import ScoreBoard from '../screens/ScoreBoard';

const Tabs = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={HomeStackScreen} />
      <Tabs.Screen name="ScoreBoard" component={ScoreBoard} />
    </Tabs.Navigator>
  );
};

export default TabNav;
