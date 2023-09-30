import React, {useState} from 'react';
import {StatusBar, Text, Image, TouchableOpacity, View} from 'react-native';
import AppInput from '../components/AppInput';
import {obj} from '../assets/Objects/obj';
import {colors} from '../styles/colors';
import {styles} from '../styles/styles';
import KeyboardAvoidingContainer from '../components/KeyboardAvoidingContainer';
import BackButton from '../components/BackButton';
import AppButton from '../components/AppButton';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Login = ({navigation}) => {
  const [email, setEmail] = useState({value: '', error: false});
  const [password, setPassword] = useState({value: '', error: false});

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

  // const handleLogin = () => {
  //   // Perform your login logic here
  //   if (email && password) {
  //     // Check if username and password are valid
  //     if (email === 'yourValidUsername' && password === 'yourValidPassword') {
  //       Alert.alert('Login successful!');
  //     } else {
  //       Alert.alert('Invalid credentia ls. Please try again.');
  //     }
  //   } else {
  //     Alert.alert('Please enter both username and password.');
  //   }
  // };

  return (
    <KeyboardAvoidingContainer>
      <StatusBar />
      <BackButton />
      <Text style={styles.pageTitle}>Login</Text>
      <Text style={{color: 'gray'}}>Please sigin to continue</Text>
      <Image
        source={require('../assets/images/AWE-logos/AWE-logos_transparent.png')}
        style={{
          width: 350,
          height: 200,
          alignSelf: 'center',
          borderRadius: 150,
        }}
      />
      <AppInput
        label="Username/Email-ID"
        showLabel={true}
        activeBorder={email.error}
        showBorder={email.value != '' ? true : false}
        onChangeText={text => {
          setEmail({...email, value: text});
          // console.log(text);
        }}
        value={email.value}
        error={email.error}
        onBlur={() => validateEmail()}
      />
      <AppInput
        label="Password"
        showLabel={true}
        // activeBorder={password.error}
        showBorder={password.value}
        onChangeText={text => {
          setPassword({...password, value: text});
          // console.log(text);
        }}
        value={password.value}
        error={password.error}
        onBlur={() => validatePassword()}
      />
      <Text style={[{alignSelf: 'center'}, styles.linkStyle]} onPress={()=>{navigation.navigate('ForgotPassword')}}>
        Forgot Password?
      </Text>
      <AppButton
        text="LOGIN"
        onPress={() => {}}
        buttonStyle={{
          marginTop: 20,
          alignSelf: 'center',
          backgroundColor: colors.appThemeColor,
          width: 250,
        }}
        textStyle={{color: colors.primaryColor, fontSize: 13}}
      />
      <View
        style={{
          flex: 1,
          justifyContent: 'space-around',
          alignItems: 'center',
          flexDirection: 'row',
          marginVertical: 50,
        }}>
        <MaterialCommunityIcons name="gmail" size={25} color="#000" />
        <AntDesign name="facebook-square" size={25} color="#000" />
        <AntDesign name="github" size={25} color="#000" />
      </View>
      <Text style={[{alignSelf: 'center', color: '#000'}]}>
        Dont have an Account?{' '}
        <Text
          style={{color: colors.alert}}
          onPress={() => {
            navigation.navigate('SignIn');
          }}>
          SignUp
        </Text>{' '}
      </Text>
    </KeyboardAvoidingContainer>
  );
};

export default Login;
