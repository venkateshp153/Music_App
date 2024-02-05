import {SafeAreaView, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {colors} from '../styles/colors';
import {styles} from '../styles/styles';
import TopBar from '../components/TopBar';
import RankCard from '../components/RankCard';
import HomeIcon from '../components/HomeIcon';
import {size} from '../styles/sizes';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 0.88}}>
       <TopBar
          onPress={() => navigation.openDrawer()}
          imageSource={require('../assets/images/schoolImg.jpg')}
        />
      <ScrollView style={styles.pageStyle}>
       
        <View style={styles.sectionBox}>
          <View>
            <Text style={{fontSize: size.fontSize.small, fontWeight: 'bold'}}>
              Class: 4th
            </Text>
            <Text>Scetion: B</Text>
          </View>
          <View>
            <Text style={{fontSize: size.fontSize.small, fontWeight: 'bold'}}>
              Teacher:
            </Text>
            <Text>Joseph Roderegus</Text>
          </View>
        </View>
        <RankCard
          nameOne={'student1'}
          nameTwo={'student2'}
          nameThree={'student3'}
        />
        <View style={{height: 'auto', flexDirection: 'row'}}>
          <HomeIcon
            labelText={'Apply'}
            imageSource={require('../assets/images/leave.png')}
          />
        </View>
        <View style={styles.homeDate}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: colors.inActive,fontSize:size.fontSize.small}}>Timings: </Text>
            <Text  style={{color: colors.textColor,fontSize:size.fontSize.small}}>GENERAL(9:00 AM - 06:30 PM)</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: colors.inActive,fontSize:size.fontSize.small}}>Date: </Text>
            <Text style={{color: colors.textColor,fontSize:size.fontSize.small}}>05 FEB 2024</Text>
          </View>
        </View>
        <View style={styles.announcements}>
          <Text style={{fontSize:size.fontSize.xmedium,fontWeight:"bold"}}>Announcements</Text>
        </View>
        <View style={styles.announcements}>
        <Text style={{fontSize:size.fontSize.xmedium,fontWeight:"bold"}}>Off this week</Text>
        </View>
        <View style={styles.announcements}>
        <Text style={{fontSize:size.fontSize.xmedium,fontWeight:"bold"}}>Wish Them</Text>
        </View>
        <View style={styles.announcements}>
        <Text style={{fontSize:size.fontSize.xmedium,fontWeight:"bold"}}>Upcoming</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
