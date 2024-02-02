import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import TaskStackScreen from './TaskStackScreen';
import TabNav from './TabNav';
const Drawer = createDrawerNavigator();
const  DrawerNav = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={TabNav} options={{headerShown:false}} />
      <Drawer.Screen name="TasksStack" component={TaskStackScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNav;
