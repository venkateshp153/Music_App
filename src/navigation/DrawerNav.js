import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native'; // Import useNavigation hook
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import TaskStackScreen from './TaskStackScreen';
import TabNav from './TabNav';
import SecureApp from '../screens/SecureApp';
import Language from '../screens/Language';
import Theme from '../screens/Theme';
import {useSelector} from 'react-redux';
import Profile from '../screens/Profile';
import { size } from '../styles/sizes';
const Drawer = createDrawerNavigator();

const DrawerContent = ({navigation}) => {
  // const handleDrawerOpen = () => {
  //   navigation.openDrawer();
  // };

  const {userData} = useSelector(state => state.auth);
  const menuItems = [
    // {name: 'Profile', subname: 'My Profile', icon: 'user'},
    {name: 'Home', subname: 'Explore', icon: 'home'},
    {name: 'DailyTasks', subname: 'Work related', icon: 'list-alt'},
    {name: 'Language', subname: 'Text Settings', icon: 'font'},
    {name: 'Secure Your App', subname: 'Change pass', icon: 'key'},
    {name: 'Themes', subname: 'Colors', icon: 'dot-circle-o'},
  ];

  const handleMenuItemPress = route => {
    navigation.navigate(route);
  };

  const handleProfilePress = () => {
    navigation.navigate('Profile');
  };

  return (
    <DrawerContentScrollView>
      <View style={{padding: 30}}>
        <View style={{justifyContent:"space-between",flexDirection:"row"}}>
        <TouchableOpacity onPress={handleProfilePress}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 20,
            }}>
            <Image
              source={{uri: 'https://via.placeholder.com/150'}}
              style={{width: 50, height: 50, borderRadius: 25, marginRight: 10}}
            />
            <View>
              {/* <Text style={{fontSize:size.fontSize.xmedium}}>{userData}</Text>
              <Text style={{fontSize: size.fontSize.small, color: 'gray'}}>
                {userData}
              </Text> */}
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.closeDrawer()}>
          <MaterialIcons name="close" size={30}/>
        </TouchableOpacity>
        </View>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleMenuItemPress(item.name)}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 10,
              }}>
              <Icon
                name={item.icon}
                size={20}
                color="black"
                style={{marginRight: 10}}
              />
              <View>
                <Text style={{fontSize: size.fontSize.xmedium,fontWeight:"bold"}}>{item.name}</Text>
                <Text style={{fontSize: size.fontSize.small, color: 'gray'}}>
                  {item.subname}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </DrawerContentScrollView>
  );
};

const DrawerNav = () => {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
    
      <Drawer.Screen
        name="MainScreen"
        component={TabNav}
        options={{headerShown: false}}
      />
        <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="DailyTasks"
        component={TaskStackScreen}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Language"
        component={Language}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Secure Your App"
        component={SecureApp}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Themes"
        component={Theme}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNav;
