import {View, Text} from 'react-native';
import React, {useEffect} from 'react';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Parent');
    }, 2000);
  }, []);
  return (
    <View>
      <Text>Loading..</Text>
    </View>
  );
};

export default Splash;
