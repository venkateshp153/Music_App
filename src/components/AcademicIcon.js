import { View, Text, Image } from 'react-native'
import React from 'react'

const AcademicIcon = ({icon,label}) => {
  return (
    <View>
        <Image source={icon}/>
      <Text>{label}</Text>
    </View>
  )
}

export default AcademicIcon