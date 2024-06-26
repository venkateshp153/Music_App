import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../styles/colors';
const TopBar = ({onPress, imageSource}) => {
  return (
    <View
      style={{
        height:50,
        width:"90%",
        alignSelf:"center",
        backgroundColor:colors.primaryColor,
        marginTop:5,
        marginBottom:5,
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:"center",
    
      }}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{
            width: 45,
            height: 45,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor:colors.buttonColor
          }}
          onPress={onPress}>
          <MaterialCommunityIcons
            size={25}
            name="menu"
            style={{color: colors.appThemeColor}}
          />
        </TouchableOpacity>
        {/* <Image
          style={{
            height: 50,
            width: 100,
            borderRadius: 10,
          }}
          source={imageSource}
        /> */}
      </View>
      <TouchableOpacity
        style={{
          width: 45,
          height: 45,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor:colors.buttonColor
        }}>
        <Ionicons
          size={20}
          name="ellipsis-vertical-sharp"
          style={{color: colors.appThemeColor}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default TopBar;
