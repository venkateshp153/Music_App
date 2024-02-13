import React from 'react';
import {styles} from '../styles/styles';
import {View, Text, Image, TouchableOpacity} from 'react-native';

const HomeIcon = ({imageSource, labelText,onPress,style}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.homeIcon,{...style}]}>
        <Image
          source={imageSource}
          style={{
            height: 30,
            width: 30,
            marginBottom: 2,
            borderRadius: 2,
          }}
        />
        <View>
          <Text style={styles.homeIconLabel}>{labelText}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HomeIcon;
