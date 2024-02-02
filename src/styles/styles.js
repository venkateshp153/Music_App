import {StyleSheet} from 'react-native';
import {colors} from './colors';
import {size} from './sizes';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  appName: {
    fontFamily: 'sans-serif-condensed',
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.titleColor,
  },
  appNameView: {
    height: 80,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  titleText: {
    fontSize: 25,
    padding: 10,
    alignSelf: 'center',
    color: colors.titleColor,
  },
  headerView: {
    backgroundColor: colors.headerColor,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    margin: 5,
  },
  headerTitleView: {
    fontFamily: 'sans-serif-light',
    width: 'auto',
    height: 80,
    justifyContent: 'flex-end',
    alignSelf: 'center',
  },

  appLogoView: {
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appLogoSize: {
    width: '60%',
    height: '60%',
    resizeMode: 'contain',
  },
  LoginButton: {
    height: 40,
    alignItems: 'center',
    backgroundColor: colors.headerColor,
    padding: 10,
    width: '70%',
    borderRadius: 45,
    margin: 5,
  },
  signInButton: {
    height: 40,
    alignItems: 'center',
    backgroundColor: colors.primaryColor,
    borderColor: colors.appThemeColor,
    padding: 10,
    width: '70%',
    borderRadius: 45,
    margin: 10,
  },
  footerTitleView: {
    fontFamily: 'sans-serif-light',
    width: 'auto',
    height: 'auto',
    justifyContent: 'center',
  },
  footerTitle: {
    color: colors.textColor,
    fontSize: 25,
    paddingBottom: 10,
    width: '80%',
    alignSelf: 'center',
  },
  appTheme: {
    alignSelf: 'center',
    width: '80%',
    marginBottom: 20,
  },
  initial_login_signIn: {
    alignItems: 'center',
  },
  appInputView: {
    alignItems: 'center',
  },
  AppInput: {
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 8,
    width: '80%',
  },
  pageTitle: {
    fontSize: size.fontSize.large,
    color: colors.textColor,
    fontWeight: 'bold',
  },
  linkStyle: {
    fontSize: 13,
    color: colors.alert,
  },
  btnPageTitle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
