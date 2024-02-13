import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../styles/styles'
import { colors } from '../styles/colors'
import { size } from '../styles/sizes'
const Timings = ({timing,date}) => {
  return (
    <View style={styles.homeDate}>
    <View style={{flexDirection: 'row'}}>
      <Text style={{color: colors.inActive,fontSize:size.fontSize.small}}>Timings: </Text>
      <Text  style={{color: colors.textColor,fontSize:size.fontSize.small}}>{timing}</Text>
    </View>
    <View style={{flexDirection: 'row'}}>
      <Text style={{color: colors.inActive,fontSize:size.fontSize.small}}>Date: </Text>
      <Text style={{color: colors.textColor,fontSize:size.fontSize.small}}>{date}</Text>
    </View>
  </View>
  )
}

export default Timings