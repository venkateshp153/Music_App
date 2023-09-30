import {View, Text} from 'react-native';
import React from 'react';
import AppInput from '../components/AppInput';
import { styles } from '../styles/styles';
import KeyboardAvoidingContainer from '../components/KeyboardAvoidingContainer';
import AppButton from '../components/AppButton';
import { colors } from '../styles/colors';
import BackButton from '../components/BackButton';

const ForgotPassword = () => {
  return (
    <KeyboardAvoidingContainer>
    <BackButton />
    <Text style={styles.pageTitle}>Forgot password</Text>
      <Text style={{color: 'gray'}}>you'll get an OTP through email</Text>
      <View style={{flex:1,marginVertical:50}}>
      
        <AppInput 
        showLabel={true}
        label={'Username/Email-id'}/>
           <AppButton
        text="Continue"
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
      </KeyboardAvoidingContainer>
    
  );
};

export default ForgotPassword;
