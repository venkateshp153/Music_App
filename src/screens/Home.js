// Home.js
import React from 'react';
import { SafeAreaView, Text, View, ScrollView } from 'react-native';
import { styles } from '../styles/styles';
import TopBar from '../components/TopBar';
import HomeIcon from '../components/HomeIcon';
import { size } from '../styles/sizes';
import Timings from '../components/Timings';
import InfoBox from '../components/InfoBox';
import { announcements, wishes, holidays } from '../assets/utility/obj';
import { colors } from '../styles/colors';

const Home = ({ navigation }) => {
  const handlePress = item => {
    navigation.navigate('Notice');
    console.log('Item clicked:', item);
  };

  return (
    <View style={{flex:1}}>
    <SafeAreaView style={{ flex: 0.9,backgroundColor:colors.primaryColor }}>
      <TopBar onPress={() => navigation.openDrawer()} imageSource={require('../assets/images/schoolImg.jpg')} />
      <Text style={{fontSize:size.fontSize.medium,alignSelf:"center"}}>Home</Text>
      <ScrollView>
        <View style={styles.pageStyle}>
          <View style={styles.sectionBox}>
            <View>
              <Text style={{ fontSize: size.fontSize.small, fontWeight: 'bold' }}>Class: 4th</Text>
              <Text>Scetion: B</Text>
            </View>
            <View>
              <Text style={{ fontSize: size.fontSize.small, fontWeight: 'bold' }}>Teacher:</Text>
              <Text>Joseph Roderegus</Text>
            </View>
          </View>
          <Timings timing={'GENERAL(9:00 AM - 06:30 PM)'} date={'05 FEB 2024'} />
          <View style={styles.homeIconContainer}>
            <HomeIcon labelText={'Apply'} imageSource={require('../assets/images/leave.png')} />
            <HomeIcon labelText={'Dates'} imageSource={require('../assets/images/dates.png')} />
            <HomeIcon labelText={'Pay fee'} imageSource={require('../assets/images/pay.png')} />
          </View>
          <View style={styles.announcements}>
            <InfoBox title="Announcements" data={announcements} onPress={handlePress} type="announcement" display="column" />
            <InfoBox title="Wish them" data={wishes} onPress={handlePress} type="wishthem" display="row" />
            <InfoBox title="Holidays" data={holidays} onPress={handlePress} type="holiday" display="row" />
          </View>
          <View style={styles.announcements}>
            <Text style={{ fontSize: size.fontSize.xmedium, fontWeight: 'bold' }}>Off this week</Text>
          </View>
        </View>
       
      </ScrollView>
    </SafeAreaView>
    <View style={{flex:0.15, backgroundColor:"#FFFF"}}></View>
    </View>
  );
};

export default Home;
