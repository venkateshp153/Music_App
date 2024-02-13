import React from 'react';
import {styles} from '../styles/styles';
import {View, Text} from 'react-native';
import TopBar from '../components/TopBar';
import Timings from '../components/Timings';

const Tasks = ({navigation}) => {
  return (
    <View>
      <TopBar
        onPress={() => navigation.openDrawer()}
        imageSource={require('../assets/images/schoolImg.jpg')}
      />
      <View style={{height: '100%'}}>
        <View style={{flex: 0.3, backgroundColor: '#EEF5FF',alignItems:"center",justifyContent:"center"}}><View style={{width:"80%",height:"80%",borderWidth:1,borderColor:"red",}}></View></View>
        <View style={{flex: 0.7, backgroundColor: '#FFF6E9'}}></View>
      </View>
    </View>
  );
};

export default Tasks;
