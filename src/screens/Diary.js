import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Tasks from './Tasks'

const Stack = createStackNavigator()
const Diary = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tasks" component={Tasks} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}

export default Diary;
