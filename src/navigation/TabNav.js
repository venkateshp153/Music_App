// import React from 'react';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// import HomeStackScreen from './HomeStackScreen';
// import ScoreBoardStack from '../screens/ScoreBoardStack';
// import Icon from 'react-native-vector-icons';
// const Tabs = createBottomTabNavigator();

// const TabNav = () => {
//   return (
//     <Tabs.Navigator
//       screenOptions={({route}) => ({
//         headerShown: false,
//         tabBarIcon: ({color, size, focused}) => {
//           let iconName;
//           if (route.name === HomeStackScreen) {
//             iconName = focused ? 'ios-home-sharp' : 'ios-home-outline';
//           } else if (route.name === ScoreBoardStack) {
//             iconName = focused ? 'wallet' : 'wallet-outline';
//           }
//           return <Icon name={iconName} size={22} color={color} />;
//         },
//       })}>
//       <Tabs.Screen name="HomeStackScreen" component={HomeStackScreen} />
//       <Tabs.Screen name="ScoreBoardStack" component={ScoreBoardStack} />
//     </Tabs.Navigator>
//   );
// };

// export default TabNav;
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStackScreen from './HomeStackScreen';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import correct icon component from react-native-vector-icons
import Diary from '../screens/Diary';
import Note from '../screens/Note';
import { colors } from '../styles/colors';
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
          backgroundColor: '#fff',
          borderRadius: 15,
          height: 60,
          marginBottom:10,alignItems:"center"
        },tabBarActiveTintColor:colors.appThemeColor,
        tabBarInactiveTintColor:colors.inActive,
        tabBarIcon: ({color, size, focused}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Notice') {
            iconName = focused ? 'reader' : 'reader-outline';
          } else if (route.name === 'Diary') {
            iconName = focused ? 'book' : 'book-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}>
      <Tabs.Screen name="Home" component={HomeStackScreen} />
      <Tabs.Screen name="Diary" component={Diary} />
      <Tabs.Screen name="Notice" component={Note} />
    </Tabs.Navigator>
  );
};

export default TabNav;
