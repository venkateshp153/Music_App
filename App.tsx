/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {isValidElement, useState} from 'react';
import Main from './Main';
import {StyleSheet, View} from 'react-native';
import AppInput from './src/components/AppInput';
import {obj} from './src/objects/obj';

function App(): JSX.Element {
  const [email, setEmail] = useState({value: '', error: false});
  const [password, setPassword] = useState({value: '', error: false});
  return (
    <View>
      <AppInput
        label="Username"
        activeBorder={email.error}
        showBorder={email.value != "" ? true : false}
        onChangeText={text => {
          setEmail({...email, value: text});
          console.log(text);
        }}
        value={email.value}
        onBlur={() => {
          if (!obj.regex.email.test(email.value)) {
            setEmail({...email, error: true});
            console.log('email not valid')
          } else {
            setEmail({...email, error: false});
             console.log("valid email")
          }
        }}
      />
         {/* <AppInput
        label="Password"
        showBorder={true}
        activeBorder={password.error}
        onChangeText={text => {
          setPassword({...password, value: text});
          console.log(text);
        }}
        onBlur={() => {
          if (!obj.regex.password.test(password.value)) {
            setEmail({...password, error: true});
            console.log("password not valid")
          } else {
            setEmail({...email, error: false});
             console.log("valid password")
          }
        }}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
