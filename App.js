import React, {useState} from 'react';
import DrawerNav from './src/navigation/DrawerNav';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './src/navigation/AuthStack';
import { useSelector } from 'react-redux';

function App(){

  const {userData} = useSelector(state => state.auth);
  console.log(JSON.stringify(userData),"=====>>>")
  return (
    <NavigationContainer>
      {userData ? <DrawerNav /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default App;
