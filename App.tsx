import React, {useState} from 'react';
import DrawerNav from './src/navigation/DrawerNav';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './src/navigation/AuthStack';

function App(): JSX.Element {
  // const [userToken, setUserToken] = useState('adeufxurf');
  const [userToken, setUserToken] = useState(null);
  return (
    <NavigationContainer>
      {userToken ? <DrawerNav /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default App;
