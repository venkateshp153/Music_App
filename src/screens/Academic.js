import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Tasks from './Tasks'
import TimeTable from './TimeTable'
import Diary from './Diary'
import Attendence from './Attendence'
import Syllabus from './Syllabus'
import Exam from './Exam'

const Stack = createStackNavigator()
const Academic = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tasks" component={Tasks} options={{headerShown:false}}/>
      <Stack.Screen name="Diary" component={Diary} options={{headerShown:false}}/>
      <Stack.Screen name="Attendence" component={Attendence} options={{headerShown:false}}/>
      <Stack.Screen name="Syllabus" component={Syllabus} options={{headerShown:false}}/>
      <Stack.Screen name="TimeTable" component={TimeTable} options={{headerShown:false}}/>
      <Stack.Screen name="Exam" component={Exam} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}

export default Academic;
