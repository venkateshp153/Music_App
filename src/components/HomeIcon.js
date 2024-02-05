import React from 'react';
import {styles} from '../styles/styles';
import {View, Text, Image} from 'react-native';
import {size} from '../styles/sizes';

const HomeIcon = ({imageSource, labelText}) => {
  return (
    <View style={styles.homeIcon}>
      <Image
        source={imageSource}
        style={{
          height: 40,
          width: 40,
          borderRadius: 10,
          borderWidth:1,borderColor:"red"
        }}
      />
      <View>
        <Text style={styles.homeIconLabel}>{labelText}</Text>
      </View>
    </View>
  );
};

export default HomeIcon;
