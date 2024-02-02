import React, {useState} from 'react';
import DrawerNav from './src/navigation/DrawerNav';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './src/navigation/AuthStack';
import { useSelector } from 'react-redux';

function App(){
  // const [userToken, setUserToken] = useState('adeufxurf');
  // const [userToken, setUserToken] = useState(null);
  const {userData} = useSelector(state => state.auth);
  console.log("---->> userData",userData)
  return (
    <NavigationContainer>
      {userData ? <DrawerNav /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default App;
