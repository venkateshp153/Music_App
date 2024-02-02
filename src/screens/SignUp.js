import {View, Text, Alert, StatusBar} from "react-native";
import React, {useState} from "react";
import KeyboardAvoidingContainer from "../components/KeyboardAvoidingContainer";
import BackButton from "../components/BackButton";
import {styles} from "../styles/styles";
import {colors} from "../styles/colors";
import AppInput from "../components/AppInput";
import AppButton from "../components/AppButton";

import { BASE_URL } from "../../env";
const SignUp = ({navigation}) => {
  const [username, setUsername] = useState({
    value: "",
    errorActive: false,
    errorMessage: "",
    verify: false,
  });
  const [email, setEmail] = useState({
    value: "",
    errorActive: false,
    errorMessage: "",
    verify: false,
  });
  const [phone, setPhone] = useState({
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
  const [cPassword, setCPassword] = useState({
    value: "",
    errorActive: false,
    errorMessage: "",
    verify: false,
  });

  function validateEmail() {
    if (!obj.regex.email.test(email.value)) {
      setEmail({...email, error: true});
      console.log("email not valid");
    } else {
      setEmail({...email, error: false});
      console.log("valid email");
    }
  }
  function validatePassword() {
    if (!obj.regex.password.test(password.value)) {
      setPassword({...password, error: true});
      console.log("password not valid");
    } else {
      setPassword({...password, error: false});
      console.log("valid password");
    }
  }


  const handleSignUp = async () => {
    let bodyObj = {
      "username":username.value,
      "email":email.value,
      "password":password.value,
      "phone":phone.value,
    }
    

    if (!username.value || !email.value || !phone.value || !password.value || !cPassword.value) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    if (password.value !== cPassword.value) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }
   console.log(bodyObj)
    try {
      const response = await fetch(`${BASE_URL}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyObj),
      });

      const data = await response.json();
      console.log(data)
      if (data.success) {
        // Signup successful
        Alert.alert("Success", "Signup successful!");
      } else {
        // Signup failed
        Alert.alert("Error");
      }
    } catch (error) {
      console.error("Error signing up:", error);
      Alert.alert("Error", "Something went wrong.");
    }
  };

  return (
    <KeyboardAvoidingContainer>
      <StatusBar />
      <View style={styles.btnPageTitle}>
        <BackButton />
        <View>
          <Text style={styles.pageTitle}>SignUp</Text>
          <Text style={{color: "gray"}}>Please do signup to continue</Text>
        </View>
      </View>
      <View style={{marginVertical: 50}}>
        <AppInput
          label="Enter Your Username"
          placeholder="Username"
          showLabel={true}
          activeBorder={username.error}
          showBorder={username.value != "" ? true : false}
          inputIcon={require("../assets/images/user.png")}
          onChangeText={text => {
            setUsername({...username, value: text});
          }}
          value={username.value}
          errorLabel={username.error}
          // onBlur={()={}}
        />
        <AppInput
          label="Enter Your Email"
          placeholder="Email"
          showLabel={true}
          activeBorder={email.error}
          showBorder={email.value != "" ? true : false}
          inputIcon={require("../assets/images/mail.png")}
          onChangeText={text => {
            setEmail({...email, value: text});
          }}
          value={email.value}
          errorLabel={email.error}
          // onBlur={() => validateEmail()}
        />
        <AppInput
          label="Enter Phone number"
          placeholder="Phone number"
          showLabel={true}
          activeBorder={phone.error}
          showBorder={phone.value != "" ? true : false}
          inputIcon={require("../assets/images/phone.png")}
          onChangeText={text => {
            setPhone({...phone, value: text});
          }}
          value={phone.value}
          error={phone.error}
          // onBlur={() => validateEmail()}
        />
        <AppInput
          label="Enter Your Password"
          placeholder="Password"
          showLabel={true}
          activeBorder={password.error}
          showBorder={password.value != "" ? true : false}
          inputIcon={require("../assets/images/lock.png")}
          onChangeText={text => {
            setPassword({...password, value: text});
          }}
          value={password.value}
          error={password.error}
          // onBlur={() => validateEmail()}
        />
        <AppInput
          label="Confirm Password"
          placeholder="Confirm Password"
          showLabel={true}
          activeBorder={cPassword.error}
          showBorder={cPassword.value != "" ? true : false}
          inputIcon={require("../assets/images/lock.png")}
          onChangeText={text => {
            setCPassword({...cPassword, value: text});
          }}
          value={cPassword.value}
          error={cPassword.error}
          // onBlur={() => validateEmail()}
        />
        <AppButton
          text="SIGNUP"
          onPress={handleSignUp}
          buttonStyle={{
            marginTop: 20,
            alignSelf: "center",
            backgroundColor: colors.appThemeColor,
            width: 250,
          }}
          textStyle={{color: colors.primaryColor, fontSize: 13}}
        />
      </View>
      <Text style={[{alignSelf: "center", color: "#000"}]}>
        Already have an Account?{" "}
        <Text
          style={{color: colors.alert}}
          onPress={() => {
            navigation.navigate("SignIn");
          }}>
          Login
        </Text>{" "}
      </Text>
    </KeyboardAvoidingContainer>
  );
};

export default SignUp;
