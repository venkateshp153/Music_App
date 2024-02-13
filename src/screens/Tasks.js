import React from 'react';
import {styles} from '../styles/styles';
import {View, Text} from 'react-native';
import TopBar from '../components/TopBar';
import Timings from '../components/Timings';
import HomeIcon from '../components/HomeIcon';
import { size } from '../styles/sizes';

const Tasks = ({navigation}) => {
  // const handlePress = item => {
  //   navigation.navigate(item);
  //   console.log('Item clicked:', item);
  // };
  return (
    <View style={{backgroundColor: '#ffff'}}>
      <TopBar
        onPress={() => navigation.openDrawer()}
        imageSource={require('../assets/images/schoolImg.jpg')}
      />
      <View style={{height: '100%'}}>
        <Text style={{fontSize:size.fontSize.medium,alignSelf:"center"}}>Academics</Text>
        <View
          style={{
            flex: 0.3,
            // backgroundColor: '#EEF5FF',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              width: '80%',
              height: '80%',
              flexWrap: 'wrap',
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <HomeIcon
              labelText={'Diary'}
              imageSource={require('../assets/images/diary.png')}
              style={{borderRadius: 8}}
              onPress={() => {
                navigation.navigate('Diary');
              }}
            />
            <HomeIcon
              labelText={'Attendence'}
              imageSource={require('../assets/images/attendence.png')}
              style={{borderRadius: 8}}
              onPress={() => {
                navigation.navigate('Attendence');
              }}
            />
            <HomeIcon
              labelText={'Syllabus'}
              imageSource={require('../assets/images/syllabus.png')}
              style={{borderRadius: 8}}
              onPress={() => {
                navigation.navigate('Syllabus');
              }}
            />
            <HomeIcon
              labelText={'TimeTable'}
              imageSource={require('../assets/images/timetable.png')}
              style={{borderRadius: 8}}
              onPress={() => {
                navigation.navigate('TimeTable');
              }}
            />
            <HomeIcon
              labelText={'Exam'}
              imageSource={require('../assets/images/exam.png')}
              style={{borderRadius: 8}}
              onPress={() => {
                navigation.navigate('Exam');
              }}
            />
          </View>
        </View>
        <View style={{flex: 0.7, backgroundColor: '#FFF6E9'}}></View>
      </View>
    </View>
  );
};

export default Tasks;
