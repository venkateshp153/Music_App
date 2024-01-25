import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SignIn from '../screens/SignIn'
import SignUp from '../screens/SignUp'
import Initial from '../screens/Initial'
import ForgotPassword from '../screens/ForgotPassword'
const Stack = createStackNavigator()

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName='Welcome'>
      <Stack.Screen
      name="Initial"
      component={Initial}
      options={{title:'Welcome',headerShown:false}}
      />
      <Stack.Screen
      name="SignIn"
      component={SignIn}
      options={{title:'SignIn',headerShown:false}}
      />
      <Stack.Screen
      name="SignUp"
      component={SignUp}
      options={{title:'SignUp',headerShown:false}}
      />
       <Stack.Screen
      name="ForgotPassword"
      component={ForgotPassword}
      options={{title:'ForgotPassword',headerShown:false}}
      />
    </Stack.Navigator> 
  )
}

export default AuthStack;
