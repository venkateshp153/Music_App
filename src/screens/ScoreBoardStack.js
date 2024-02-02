import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './Home'
import Note from './Note'

const Stack = createStackNavigator()
const ScoreBoardStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Note" component={Note} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}

export default ScoreBoardStack;
