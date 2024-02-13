import React from 'react';
import {styles} from '../styles/styles';
import {View, Text, Image, TouchableOpacity} from 'react-native';

const HomeIcon = ({imageSource, labelText}) => {
  return (
    <TouchableOpacity>
      <View style={styles.homeIcon}>
        <Image
          source={imageSource}
          style={{
            height: 30,
            width: 30,
            marginBottom: 2,
            borderRadius: 2,
            // borderWidth: 1,
            // borderColor: 'red',
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
