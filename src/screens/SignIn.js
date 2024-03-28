import React, {useState} from 'react';
import {
  StatusBar,
  Text,
  Image,
  View,
  Alert,
  TouchableOpacity,
} from 'react-native';
import KeyboardAvoidingContainer from '../components/KeyboardAvoidingContainer';
import BackButton from '../components/BackButton';
import AppButton from '../components/AppButton';
import AppInput from '../components/AppInput';
import {obj} from '../assets/utility/obj';
import {colors} from '../styles/colors';
import {styles} from '../styles/styles';
import {BASE_URL} from '../../env';
import {useDispatch, useSelector} from 'react-redux';
import {signin} from '../redux/features/AuthSlice';
import Splash from './Splash';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState({
    value: 'admin@gmail.com',
    errorActive: false,
    errorMessage: '',
    verify: false,
  });
  const [password, setPassword] = useState({
    value: 'Admin@123',
    errorActive: false,
    errorMessage: '',
    verify: false,
    show: false,
  });
  const [isFocused, setIsFocused] = useState(false);
  const dispatch = useDispatch();
  const {userData, isLoading} = useSelector(state => state.auth);

  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleEmailInputChange = text => {
    const inputValue = text;
    const val = obj.regex.email.test(text);
    setEmail({
      ...email,
      value: inputValue,
      verify: val,
      errorMessage: false ? 'Incorrect Email' : '',
    });
  };
  const handlePasswordInputChange = text => {
    const inputValue = text;
    const val = obj.regex.password.test(text);
    setPassword({
      ...password,
      value: inputValue,
      verify: val,
      errorMessage: false ? 'Incorrect Email' : '',
    });
  };
  const handleEmailInputOnBlur = () => {
    setIsFocused(false);
    if (
      email.value === '' ||
      email.value === undefined ||
      email.value === null
    ) {
      setEmail({
        ...email,
        errorActive: true,
        errorMessage: 'Enter your email-Id',
      });
      console.log(`${email.errorMessage} ===> error ==> ${email.errorActive}`);
    } else if (email.value.match(obj.regex.email)) {
      setEmail({
        ...email,
        errorActive: false,
        errorMessage: '',
      });
      console.log(
        `It's a Match ${email.errorMessage} ===> error ==>${email.errorActive}`,
      );
    } else {
      setEmail({
        ...email,
        errorActive: true,
        errorMessage: 'incorrect email',
      });
      console.log(
        `It's not a Matched  ${email.errorMessage} ===> error ==>${email.errorActive}`,
      );
    }
  };

  const handlePasswordInputOnBlur = () => {
    setIsFocused(false);
    if (
      password.value === '' ||
      password.value === undefined ||
      password.value === null
    ) {
      setPassword({
        ...password,
        errorActive: true,
        errorMessage: 'Enter your password',
      });
    } else if (password.value.match(obj.regex.password)) {
      setPassword({
        ...password,
        errorActive: false,
        errorMessage: '',
      });
      // console.log(`${newPassword.errorMessage} ==>>`)
    } else {
      setPassword({
        ...password,
        errorActive: true,
        errorMessage: 'Incorrect Password',
      });
      // show pop-up that shows Password requirements
    }
  };

  // const handleSignin = async () => {
  //   // Prepare request body
  //   const requestBody = {
  //     "email": email.value,
  //     "password": password.value,
  //   };

  //   // Perform basic validation
  //   if (!requestBody.email || !requestBody.password) {
  //     Alert.alert('Error', 'Please fill in all fields');
  //     return;
  //   }

  //   try {
  //     const response = await fetch(`${BASE_URL}/signin`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(requestBody), // Stringify the JSON object
  //     });

  //     // if (!response) {
  //     //   throw new Error('Failed to sign in');
  //     // }

  //     const data = await response.json();
  //     if (data.success) {
  //       // Sign-in successful
  //       Alert.alert('Success', 'Sign-in successful!');
  //       // Save token to AsyncStorage or Context for further authentication
  //       // For example, you can store it in AsyncStorage like this:
  //       // await AsyncStorage.setItem('token', data.token);
  //     } else {
  //       // Sign-in failed
  //       Alert.alert('Error', data.message || 'Sign-in failed');
  //     }
  //   } catch (error) {
  //     console.error('Error signing in:', error);
  //     Alert.alert('Error', 'Failed to sign in. Please try again.');
  //   }
  // };

  const handleSignin = () => {
    const params = {
      email: email.value,
      password: password.value,
    };
    if (!email.value || !password.value) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    console.log('params', params);
    dispatch(signin(params));
    console.log("+++++++",JSON.stringify(userData))
    // setEmail({...email,errorMessage:userData.message})
    // setPassword({...password,errorMessage:userData.message})
  };

  return (
    <>
      {!isLoading ? (
        <KeyboardAvoidingContainer>
          <StatusBar />

          <View>
            <View style={styles.btnPageTitle}>
              <BackButton />
              <View>
                <Text style={styles.pageTitle}>Login</Text>
                <Text style={{color: 'gray'}}>Please sign in to continue</Text>
              </View>
            </View>

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
              showLabel={false}
              inputIcon={require('../assets/images/mail.png')}
              activeBorder={email.errorMessage !== '' ? true : false}
              showBorder={true}
              value={email.value}
              errorLabel={email.errorMessage}
              onChangeText={handleEmailInputChange}
              onBlur={handleEmailInputOnBlur}
              onFocus={handleFocus}
            />
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <AppInput
                label="Password"
                showLabel={false}
                inputIcon={require('../assets/images/lock.png')}
                activeBorder={password.errorMessage !== '' ? true : false}
                showBorder={true}
                value={password.value}
                secureTextEntry={password.show == true ? false : true}
                errorLabel={password.errorMessage}
                onChangeText={handlePasswordInputChange}
                onBlur={handlePasswordInputOnBlur}
                onFocus={handleFocus}
                style={{
                  width: '100%',
                  alignSelf: 'flex-start',
                  paddingLeft: 10,
                }}
              />
              <TouchableOpacity
                onPress={() => {
                  setPassword({...password, show: !password.show});
                }}>
                {password.show ? (
                  <Image
                    source={require('../assets/images/See.png')}
                    style={{
                      width: 20,
                      height: 20,
                      alignSelf: 'flex-start',
                      position: 'absolute',
                      right: 10,
                      bottom: 0.5,
                    }}
                  />
                ) : (
                  <Image
                    source={require('../assets/images/noSee.png')}
                    style={{
                      width: 20,
                      height: 20,
                      alignSelf: 'flex-start',
                      position: 'absolute',
                      right: 10,
                      bottom: 0.5,
                    }}
                  />
                )}
              </TouchableOpacity>
            </View>

            <Text
              style={[{alignSelf: 'center'}, styles.linkStyle]}
              onPress={() => {
                navigation.navigate('ForgotPassword');
              }}>
              Forgot Password?
            </Text>
            <AppButton
              text="LOGIN"
              onPress={handleSignin}
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
              <Image
                source={require('../assets/images/google.png')}
                style={{width: 20, height: 20, alignSelf: 'baseline'}}
              />
              <Image
                source={require('../assets/images/facebook.png')}
                style={{width: 20, height: 20, alignSelf: 'baseline'}}
              />
              <Image
                source={require('../assets/images/github.png')}
                style={{width: 20, height: 20, alignSelf: 'baseline'}}
              />
            </View>
            <Text style={[{alignSelf: 'center', color: '#000'}]}>
              Don't have an Account?{' '}
              <Text
                style={{color: colors.alert}}
                onPress={() => {
                  navigation.navigate('SignUp');
                }}>
                SignUp
              </Text>{' '}
            </Text>
          </View>
        </KeyboardAvoidingContainer>
      ) : (
        <Splash />
      )}
    </>
  );
};

export default SignIn;
