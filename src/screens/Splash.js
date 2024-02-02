import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';

const Splash = () => {
  return (
    <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size="small" color="#7071E8" />
      <Text>Loading..</Text>
    </View>
  );
};

export default Splash;
