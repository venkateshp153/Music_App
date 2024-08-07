import {StyleSheet} from 'react-native';
import {colors} from './colors';
import {size} from './sizes';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  boxColor: {
    borderWidth: 1,
    borderColor: 'red',
  },
  pageStyle: {
    width: '90%',
    alignSelf: 'center',
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
  sectionBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignSelf: 'flex-end',
    marginVertical: 10,
  },
  rankCard: {
    flexDirection: 'row',
    height: 90,
    width: '80%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  homeIconContainer: {
    height: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
    backgroundColor: colors.appThemeColor,
    borderRadius: 8,
    padding: 20,
  },
  homeIcon: {
    height: 60,
    width: 70,
    borderRadius: 40,
    borderWidth: 1,
    marginBottom: 30,
    marginHorizontal: 10,
    borderColor: colors.inActive,
    backgroundColor: colors.primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  homeIconLabel: {
    width: 'auto',
    fontSize: size.fontSize.xsmall,
    textAlign: 'center',
  },
  homeDate: {
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.buttonColor,
    backgroundColor: '#eeee',
    marginVertical: 15,
  },
  announcements: {
    height: 'auto',

    borderColor: colors.buttonColor,
    marginVertical: 10,
  },
  announcementItemContainer: {
    height: 50,
    padding: 10,
    marginVertical: 5,
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.inActive,
    borderRadius: 8,
  },
  announcementItemTitle: {
    fontSize: size.fontSize.small,
    fontWeight: 'bold',
  },
  announcementItemBody: {
    fontSize: size.fontSize.xsmall,
  },
  flatListIcon: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  wishItemContainer: {
    height: 60,
    width: 80,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  wishItemLabel: {
    fontSize: size.fontSize.xsmall,
    textAlign: 'center',
  },
  holidayItemContainer: {
    height: 100,
    width: '100%',
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 10,
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  holidayMonthLabel: {
    textAlign: 'left',
    padding: 5,
  },
  holidayDayLabel: {
    textAlign: 'right',
    padding: 5,
  },
  holidayWishsLabel: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cancelBtn: {
    marginTop: 10,
    borderWidth: 1,
    backgroundColor: colors.appThemeColor,
    height: 40,
    padding: 10,
    width: 80,
    alignSelf: 'flex-end',
    alignItems: 'center',
    borderRadius: 10,
    color: 'white',
  },
  timeTableContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressBar: {
    width: 250,
  },
  segmentButtonView: {
    backgroundColor: colors.background,
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  segmentButton: {
    borderBottomWidth: null,
    width: '50%',
    justifyContent: 'center',
  },
  segmentButtonText: {
    fontSize: size.fontSize.small,
    color: colors.textColor,
    paddingVertical: 10,
    alignSelf: 'center',
  },
  segmentDataView: {
    width: '100%',
    flex: 0.8,
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
    borderWidth: 1,
    borderColor: colors.baseGray05,
  },
  timeTableView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeTableImg: {
    borderWidth: 10,
    width: 100,
    height: 100,
  },
  timeTableInput: {
    width: '100%',
    alignSelf: 'flex-start',
    paddingLeft: 10,
    color:"black"
  },
  timetableUploadBtn: {
    height: 40,
    width: '80%',
    backgroundColor: colors.darkColor,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 22,
    alignSelf: 'center',
  },
  timeTableListView: {
    flexGrow: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent:"center",
  },
  timeTableListImg: {
    width: 90,
    height: 90,
    resizeMode: 'cover',    
  },
  timetableImageView: {
    borderColor:colors.baseGray05,
    borderWidth:1,
    margin:5,
    marginVertical:5,
    width: 100,
    height:100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timetableInfo: {
    position: 'absolute',
    zIndex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.darkColor,
  },
  cancel_Check_Btns:{
    position: 'absolute',
    top: 5,
    left: 5,
    zIndex: 1,
    alignSelf: 'flex-end',
    backgroundColor: colors.baseGray05,
  }
});
