import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Initial from '../screens/Initial';
import Login from '../screens/Login';
import SignIn from '../screens/SignIn';
import ForgotPassword from '../screens/ForgotPassword';
const Stack = createStackNavigator()

const AuthStack = () => {
  return (
     <NavigationContainer>
    <Stack.Navigator initialRouteName='Welcome'>
      <Stack.Screen
      name="Initial"
      component={Initial}
      options={{title:'Welcome',headerShown:false}}
      />
      <Stack.Screen
      name="Login"
      component={Login}
      options={{title:'Login',headerShown:false}}
      />
      <Stack.Screen
      name="SignIn"
      component={SignIn}
      options={{title:'SignIn',headerShown:false}}
      />
       <Stack.Screen
      name="ForgotPassword"
      component={ForgotPassword}
      options={{title:'ForgotPassword',headerShown:false}}
      />
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AuthStack

