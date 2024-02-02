import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'
import Note from '../screens/Note'

const Stack = createStackNavigator()
const HomeStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}

export default HomeStackScreen;
