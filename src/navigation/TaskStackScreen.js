import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Tasks from '../screens/Tasks'
const Stack = createStackNavigator()
const TaskStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tasks" component={Tasks} />
    </Stack.Navigator>
  )
}

export default TaskStackScreen;
