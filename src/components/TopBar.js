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
        marginTop:10,
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:"center",
    
      }}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{
            width: 50,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            // borderWidth:1,
            // borderColor:"black",
            borderRadius:45,
            backgroundColor:colors.buttonColor
          }}
          onPress={onPress}>
          <MaterialCommunityIcons
            size={30}
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
          width: 50,
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius:45,
          backgroundColor:colors.buttonColor
        }}>
        <Ionicons
          size={30}
          name="person-circle-outline"
          style={{color: colors.appThemeColor}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default TopBar;
