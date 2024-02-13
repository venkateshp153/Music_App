import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'


const Stack = createStackNavigator()
const HomeStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={Home} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}

export default HomeStackScreen;
