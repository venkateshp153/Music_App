import {View, Text} from 'react-native';
import React from 'react';
import {styles} from '../styles/styles';

const RankCard = ({nameOne, nameTwo, nameThree}) => {
  return (
    <View style={styles.rankCard}>
      <View
        style={{
          justifyContent: 'center',
        }}>
        <Text>1st Rank </Text>
        <Text>2nd rank </Text>
        <Text>3rd rank </Text>
      </View>
      <View
        style={{
          justifyContent: 'center',
        }}>
        <Text>⭐ - {nameOne}</Text>
        <Text>⭐ - {nameTwo}</Text>
        <Text>⭐ - {nameThree}</Text>
      </View>
    </View>
  );
};

export default RankCard;
