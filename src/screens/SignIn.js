import {View, Text, StatusBar} from 'react-native';
import React, {useState} from 'react';
import KeyboardAvoidingContainer from '../components/KeyboardAvoidingContainer';
import BackButton from '../components/BackButton';
import {styles} from '../styles/styles';
import { colors } from '../styles/colors';
import AppInput from '../components/AppInput';
import AppButton from '../components/AppButton';

const SignIn = ({navigation}) => {
  const [name, setName] = useState({value: '', error: false});
  const [email, setEmail] = useState({value: '', error: false});
  const [phone, setPhone] = useState({value: '', error: false});
  const [password, setPassword] = useState({value: '', error: false});
  const [cPassword, setCPassword] = useState({value: '', error: false});

  function validateEmail() {
    if (!obj.regex.email.test(email.value)) {
      setEmail({...email, error: true});
      console.log('email not valid');
    } else {
      setEmail({...email, error: false});
      console.log('valid email');
    }
  }
  function validatePassword() {
    if (!obj.regex.password.test(password.value)) {
      setPassword({...password, error: true});
      console.log('password not valid');
    } else {
      setPassword({...password, error: false});
      console.log('valid password');
    }
  }

  return (
    <KeyboardAvoidingContainer>
      <StatusBar />
      <BackButton />
      <Text style={styles.pageTitle}>SignUp</Text>
      <Text style={{color: 'gray'}}>Please do signup to continue</Text>
      <View style={{marginVertical: 50}}>
        <AppInput
          label="Full name"
          showLabel={true}
          activeBorder={name.error}
          showBorder={name.value != '' ? true : false}
          onChangeText={text => {
            setName({...name, value: text});
            // console.log(text);
          }}
          value={name.value}
          error={name.error}
          // onBlur={()={}}
        />
        <AppInput
          label="Email"
          showLabel={true}
          activeBorder={email.error}
          showBorder={email.value != '' ? true : false}
          onChangeText={text => {
            setEmail({...email, value: text});
            // console.log(text);
          }}
          value={email.value}
          error={email.error}
          // onBlur={() => validateEmail()}
        />
        <AppInput
          label="Phone number"
          showLabel={true}
          activeBorder={phone.error}
          showBorder={phone.value != '' ? true : false}
          onChangeText={text => {
            setPhone({...phone, value: text});
            // console.log(text);
          }}
          value={phone.value}
          error={phone.error}
          // onBlur={() => validateEmail()}
        />
        <AppInput
          label="Password"
          showLabel={true}
          activeBorder={password.error}
          showBorder={password.value != '' ? true : false}
          onChangeText={text => {
            setPassword({...password, value: text});
            // console.log(text);
          }}
          value={password.value}
          error={password.error}
          // onBlur={() => validateEmail()}
        />
        <AppInput
          label="Confirm Password"
          showLabel={true}
          activeBorder={cPassword.error}
          showBorder={cPassword.value != '' ? true : false}
          onChangeText={text => {
            setCPassword({...cPassword, value: text});
            // console.log(text);
          }}
          value={cPassword.value}
          error={cPassword.error}
          // onBlur={() => validateEmail()}
        />
        <AppButton
          text="SIGNUP"
          onPress={() => {}}
          buttonStyle={{
            marginTop: 20,
            alignSelf: 'center',
            backgroundColor: colors.appThemeColor,
            width: 250,
          }}
          textStyle={{color: colors.primaryColor, fontSize: 13}}
        />
      </View>
          <Text style={[{alignSelf: 'center', color: '#000'}]}>
        Already have an Account?{' '}
        <Text
          style={{color: colors.alert}}
          onPress={() => {
            navigation.navigate('Login');
          }}>
          Login
        </Text>{' '}
      </Text>
    </KeyboardAvoidingContainer>
  );
};

export default SignIn;
