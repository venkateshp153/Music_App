// import React, {useState} from 'react';
// import {StatusBar, Text, Image, View} from 'react-native';
// import AppInput from '../components/AppInput';
// import { useDispatch } from 'react-redux';
// import { setToken} from '../redux/auth.js';
// import {obj} from '../assets/Objects/obj';
// import {colors} from '../styles/colors';
// import {styles} from '../styles/styles';
// import KeyboardAvoidingContainer from '../components/KeyboardAvoidingContainer';
// import BackButton from '../components/BackButton';
// import AppButton from '../components/AppButton';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import { login } from '../api/auth';

// const SignIn = ({navigation}) => {
//   const [email, setEmail] = useState({value: '', error: false});
//   const [password, setPassword] = useState({value: '', error: false});
//   const dispatch = useDispatch();

//   function validateEmail() {
//     if (!obj.regex.email.test(email.value)) {
//       setEmail({...email, error: true});
//       console.log('email not valid');
//     } else {
//       setEmail({...email, error: false});
//       console.log('valid email');
//     }
//   }
//   function validatePassword() {
//     if (!obj.regex.password.test(password.value)) {
//       setPassword({...password, error: true});
//       console.log('password not valid');
//     } else {
//       setPassword({...password, error: false});
//       console.log('valid password');
//     }
//   }

  

//   const handleLogin = async () => {
//     try {
//       const response = await login(email.value, password.value);
//       const data = await response.json();

//       if (response.ok) {
//         dispatch(setToken(data.token)); // Dispatch token to store
//         navigation.navigate('Home');
//       } else {
//         Alert.alert('Error', data.message);
//       }
//     } catch (error) {
//       console.error('Login failed:', error);
//       Alert.alert('Error', 'Failed to login. Please try again.');
//     }
//   }
  

//   return (
//     <KeyboardAvoidingContainer>
//       <StatusBar />
//       <View style={styles.btnPageTitle}>
//       <BackButton />
//       <View>
//       <Text style={styles.pageTitle}>Login</Text>
//       <Text style={{color: 'gray'}}>Please sigin to continue</Text>
//       </View>
      
//       </View>
    
//       <Image
//         source={require('../assets/images/AWE-logos/AWE-logos_transparent.png')}
//         style={{
//           width: 350,
//           height: 200,
//           alignSelf: 'center',
//           borderRadius: 150,
//         }}
//       />
//       <AppInput
//         label="Username/Email-ID"
//         showLabel={true}
//         inputIcon={require('../assets/images/mail.png')}
//         activeBorder={email.error}
//         showBorder={email.value != '' ? true : false}
//         onChangeText={text => {
//           setEmail({...email, value: text});
//           // console.log(text);
//         }}
//         value={email.value}
//         error={email.error}
//         onBlur={() => validateEmail()}
//       />
//       <AppInput
//         label="Password"
//         showLabel={true}
//         // activeBorder={password.error}
//         showBorder={password.value}
//         onChangeText={text => {
//           setPassword({...password, value: text});
//           // console.log(text);
//         }}
//         value={password.value}
//         error={password.error}
//         onBlur={() => validatePassword()}
//       />
//       <Text style={[{alignSelf: 'center'}, styles.linkStyle]} onPress={()=>{navigation.navigate('ForgotPassword')}}>
//         Forgot Password?
//       </Text>
//       <AppButton
//         text="LOGIN"
//         onPress={handleLogin}
//         buttonStyle={{
//           marginTop: 20,
//           alignSelf: 'center',
//           backgroundColor: colors.appThemeColor,
//           width: 250,
//         }}
//         textStyle={{color: colors.primaryColor, fontSize: 13}}
//       />
//       <View
//         style={{
//           flex: 1,
//           justifyContent: 'space-around',
//           alignItems: 'center',
//           flexDirection: 'row',
//           marginVertical: 50,
//         }}>
//         <MaterialCommunityIcons name="gmail" size={25} color="red" />
//         <AntDesign name="facebook-square" size={25} color="blue" />
//         <AntDesign name="github" size={25} color="#000" />
//       </View>
//       <Text style={[{alignSelf: 'center', color: '#000'}]}>
//         Dont have an Account?{' '}
//         <Text
//           style={{color: colors.alert}}
//           onPress={() => {
//             navigation.navigate('SignUp');
//           }}>
//           SignUp
//         </Text>{' '}
//       </Text>
//     </KeyboardAvoidingContainer>
//   );
// };

// export default SignIn;




// SignIn component
import React, { useState } from 'react';
import { StatusBar, Text, Image, View, Alert } from 'react-native';
import { login } from '../api/auth';
import KeyboardAvoidingContainer from '../components/KeyboardAvoidingContainer';
import BackButton from '../components/BackButton';
import AppButton from '../components/AppButton';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AppInput from '../components/AppInput';
import { obj } from '../assets/Objects/obj';
import { colors } from '../styles/colors';
import { styles } from '../styles/styles';

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState({
    value: "",
    errorActive: false,
    errorMessage: "",
    verify: false,
  });
  const [password, setPassword] = useState({
    value: "",
    errorActive: false,
    errorMessage: "",
    verify: false,
  });
  const [isFocused, setIsFocused] = useState(false);
  // function validateEmail() {
  //   if (!obj.regex.email.test(email.value)) {
  //     setEmail({ ...email, error: true });
  //     console.log('email not valid');
  //   } else {
  //     setEmail({ ...email, error: false });
  //     console.log('valid email');
  //   }
  // }

  // function validatePassword() {
  //   if (!obj.regex.password.test(password.value)) {
  //     setPassword({ ...password, error: true });
  //     console.log('password not valid');
  //   } else {
  //     setPassword({ ...password, error: false });
  //     console.log('valid password');
  //   }
  // }
  
  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleEmailInputChange = (text) => {
    const inputValue = text;
    const val = obj.regex.email.test(text);
    setEmail({ ...email, value: inputValue, verify: val,errorMessage:false?"Incorrect Email":"" });
  };
  const handlePasswordInputChange = (text) => {
    const inputValue = text;
    const val = obj.regex.password.test(text);
    setPassword({ ...password, value: inputValue, verify: val,errorMessage:false?"Incorrect Email":"" });
  };
  const handleEmailInputOnBlur = () => {
    setIsFocused(false);
    if (
      email.value === "" ||
      email.value === undefined ||
      email.value === null
    ) {
      setEmail({
        ...email,
        errorActive: true,
        errorMessage: "Please enter registered email Id",
      });
      console.log(`${email.errorMessage} ===> error ==> ${email.errorActive}`);
    } else if (email.value.match(obj.regex.email)) {
      setEmail({
        ...email,
        errorActive: false,
        errorMessage: "",
      });
      console.log(
        `It's a Match ${email.errorMessage} ===> error ==>${email.errorActive}`
      );
    } else {
      setEmail({
        ...email,
        errorActive: true,
        errorMessage: "incorrect email Id",
      });
      console.log(
        `It's not a Matched  ${email.errorMessage} ===> error ==>${email.errorActive}`
      );
    }
  };

  const handlePasswordInputOnBlur = () => {
    setIsFocused(false);
    if (
      password.value === "" ||
      password.value === undefined ||
      password.value === null
    ) {
      setPassword({
        ...password,
        errorActive: true,
        errorMessage: "please enter the password",
      });
    } else if (password.value.match(obj.regex.password)) {
      setPassword({
        ...password,
        errorActive: false,
        errorMessage: "",
      });
      // console.log(`${newPassword.errorMessage} ==>>`)
    } else {
      setPassword({
        ...password,
        errorActive: true,
        errorMessage: "Incorrect Password",
      });
      // show pop-up that shows Password requirements
    }
  };

  const handleLogin = async () => {
    try {
      const response = await login(email, password);
      const data = await response.json();

      if (response.ok) {
      
        navigation.navigate('Home');
      } else {
       
        Alert.alert('Error', data.message);
      }
    } catch (error) {
      console.error('Login failed:', error);
    
      Alert.alert('Error', 'Failed to login. Please try again.');
    }
  };

  return (
    <KeyboardAvoidingContainer>
      <StatusBar />
      <View style={styles.btnPageTitle}>
        <BackButton />
        <View>
          <Text style={styles.pageTitle}>Login</Text>
          <Text style={{ color: 'gray' }}>Please sign in to continue</Text>
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
        activeBorder={ email.errorMessage !== "" ? true : false}
        showBorder={true} 
        value={email.value}
        error={email.errorMessage}
        onChangeText={handleEmailInputChange}
        onBlur={handleEmailInputOnBlur}
        onFocus={handleFocus}
        
      />
      <AppInput
        label="Password"
        showLabel={false}
        inputIcon={require('../assets/images/mail.png')}
        activeBorder={password.errorMessage !== "" ? true : false}
        showBorder={true}
        value={password.value}
        error={password.errorMessage}
        onChangeText={handlePasswordInputChange}
        onBlur={handlePasswordInputOnBlur}
        onFocus={handleFocus}
    
      />
      <Text
        style={[{ alignSelf: 'center' }, styles.linkStyle]}
        onPress={() => {
          navigation.navigate('ForgotPassword');
        }}>
        Forgot Password?
      </Text>
      <AppButton
        text="LOGIN"
        onPress={handleLogin}
        buttonStyle={{
          marginTop: 20,
          alignSelf: 'center',
          backgroundColor: colors.appThemeColor,
          width: 250,
        }}
        textStyle={{ color: colors.primaryColor, fontSize: 13 }}
      />
      <View
        style={{
          flex: 1,
          justifyContent: 'space-around',
          alignItems: 'center',
          flexDirection: 'row',
          marginVertical: 50,
        }}>
        <MaterialCommunityIcons name="gmail" size={25} color="red" />
        <AntDesign name="facebook-square" size={25} color="blue" />
        <AntDesign name="github" size={25} color="#000" />
      </View>
      <Text style={[{ alignSelf: 'center', color: '#000' }]}>
        Don't have an Account?{' '}
        <Text
          style={{ color: colors.alert }}
          onPress={() => {
            navigation.navigate('SignUp');
          }}>
          SignUp
        </Text>{' '}
      </Text>
    </KeyboardAvoidingContainer>
  );
};

export default SignIn;
