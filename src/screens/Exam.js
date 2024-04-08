import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {styles} from '../styles/styles';
import { colors } from '../styles/colors';

const Exam = () => {
  const [selectedOption, setSelectedOption] = useState('Option 1'); // Initialize with 'Option 1'
  const [segBtnColor, setSegBtnColor] = useState('Option 1'); // Initialize with 'Option 1'

  const handleOptionClick = option => {
    setSelectedOption(option);
    setSegBtnColor(option);
  };

  const renderOptionsContent = () => {
    switch (selectedOption) {
      case 'Option 1':
        return (
          <View>
            <Text>Option 1 Content</Text>
            <TextInput placeholder="Input 1" />
            <TextInput placeholder="Input 2" />
          </View>
        );
      case 'Option 2':
        return (
          <View>
            <Text>Option 2 Content</Text>
            <TextInput placeholder="Input 3" />
            <TextInput placeholder="Input 4" />
          </View>
        );

      default:
        return null;
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
      <View style={styles.segmentButtonView}>
        <TouchableOpacity style={[styles.segmentButton, {backgroundColor: segBtnColor === 'Option 1' ? colors.headerColor : colors.baseGray05}]} onPress={() => handleOptionClick('Option 1')}>
          <Text style={[styles.segmentButtonText,{color:segBtnColor === "Option 1"?colors.primaryColor : colors.darkColor}]}>Option 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.segmentButton, {backgroundColor: segBtnColor === 'Option 2' ? colors.headerColor : colors.baseGray05}]} onPress={() => handleOptionClick('Option 2')}>
          <Text style={[styles.segmentButtonText,{color:segBtnColor === "Option 2"?colors.primaryColor : colors.darkColor}]}>Option 2</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.segmentDataView}>{renderOptionsContent()}</View>
    </View>
  );
};

export default Exam;
