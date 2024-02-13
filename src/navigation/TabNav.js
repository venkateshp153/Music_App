import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStackScreen from './HomeStackScreen';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import correct icon component from react-native-vector-icons
import Academic from '../screens/Academic';
import Notice from '../screens/Notice';
import {colors} from '../styles/colors';
const Tabs = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tabs.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        showLabel: false,
        tabBarStyle: {
          position: 'absolute',
          botton: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: 'white',
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 2,
          borderRadius: 5,
          height: 50,
          marginBottom: 15,
          alignItems: 'center',
        },
        tabBarActiveTintColor: colors.appThemeColor,
        tabBarInactiveTintColor: colors.inActive,
        tabBarIcon: ({color, size, focused}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Notice') {
            iconName = focused ? 'reader' : 'reader-outline';
          } else if (route.name === 'Academic') {
            iconName = focused ? 'book' : 'book-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}>
      <Tabs.Screen name="Home" component={HomeStackScreen} />
      <Tabs.Screen name="Academic" component={Academic} />
      <Tabs.Screen name="Notice" component={Notice} />
    </Tabs.Navigator>
  );
};

export default TabNav;
