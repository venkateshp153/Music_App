
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopBar from '../components/TopBar'
const Notice = ({navigation}) => {
  return (
    <View>
      <TopBar
          onPress={() => navigation.openDrawer()}
          imageSource={require('../assets/images/schoolImg.jpg')}
        />
      <Text>Notice Board</Text>
    </View>
  )
}

export default Notice

const styles = StyleSheet.create({})