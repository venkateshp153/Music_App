import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import {styles} from '../styles/styles';
import {obj} from '../assets/Objects/obj';
import AppText from '../components/AppText';
import {colors} from '../styles/colors';
import AppButton from '../components/AppButton';

const Initial = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerView}>
        <View style={styles.headerTitleView}>
          <AppText text={obj.Initial.headerTitle} style={styles.titleText} />
        </View>
        <View style={styles.appNameView}>
          <AppText text={obj.Initial.appName} style={styles.appName} />
        </View>
      </View>
      <View style={styles.appLogoView}>
        <Image
          style={styles.appLogoSize}
          source={require('../assets/images/mainLogo.png')}
        />
      </View>
      <View style={styles.footerTitleView}>
        <AppText text={obj.Initial.footerTitle} style={styles.footerTitle} />
        <AppText
          text={obj.Initial.appTheme}
          style={[styles.appTheme, {color: colors.textColor}]}
        />
      </View>
      <View style={styles.initial_login_signIn}>
        {/* <TouchableOpacity
        style={styles.LoginButton}
        onPress={() => navigation.navigate('Login', {name: 'Login'})}>
        <AppText text="Login" style={{color:colors.primaryColor}} />
      </TouchableOpacity>
       <TouchableOpacity
        style={styles.signInButton}
        onPress={() => navigation.navigate('SignIn', {name: 'SignIn'})}>
        <AppText text="Create Account" style={{color:colors.appThemeColor}}/>
      </TouchableOpacity> */}
        <AppButton
          text="LOGIN"
          buttonStyle={{
            marginTop: 20,
            alignSelf: 'center',
            backgroundColor: colors.appThemeColor,
            width: 250,
          }}
          textStyle={{color: colors.primaryColor, fontSize: 13}}
          onPress={() => navigation.navigate('Login', {name: 'Login'})}
        />
           <AppButton
          text="SIGNUP"
          buttonStyle={{
            marginTop: 20,
            alignSelf: 'center',
            backgroundColor: '#FAF0E4',
            width: 250,
          }}
          textStyle={{color: colors.appThemeColor, fontSize: 13}}
          onPress={() => navigation.navigate('SignIn', {name: 'SignIn'})}
        />
      </View>
    </ScrollView>
  );
};

export default Initial;
