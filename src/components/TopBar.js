import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../styles/colors';
const TopBar = ({onPress, imageSource}) => {
  return (
    <View
      style={{
        height:60,
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:"center",
        backgroundColor: colors.appThemeColor,
      }}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{
            width: 50,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={onPress}>
          <MaterialCommunityIcons
            size={30}
            name="menu"
            style={{color: colors.primaryColor}}
          />
        </TouchableOpacity>
        <Image
          style={{
            height: 50,
            width: 100,
            borderRadius: 10,
          }}
          source={imageSource}
        />
      </View>
      <TouchableOpacity
        style={{
          width: 50,
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Ionicons
          size={40}
          name="person-circle-outline"
          style={{color: colors.primaryColor}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default TopBar;
