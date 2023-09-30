import {TouchableOpacity, View} from 'react-native';
import {colors} from '../styles/colors';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
const BackButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={{
        width: '10%',
        alignItems: 'center',
        height: 30,
      }}>
      <FontAwesome
        name="angle-double-left"
        size={25}
        color={colors.appThemeColor}
        style={{borderRadius: 30, alignSelf: 'center'}}
      />
    </TouchableOpacity>
  );
};

export default BackButton;
