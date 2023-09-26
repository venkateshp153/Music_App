import {View, Text, TextInput, TextInputProps} from 'react-native';

import React from 'react';

interface Props extends TextInputProps {
  label: String;
  activeBorder: Boolean;
  showBorder: Boolean;
  value: String;
}

const AppInput = (props: Props) => {
  return (
    <View style={{borderColor: 'red', borderWidth: 1, width: '85%'}}>
      <View
        style={{left: 10, borderWidth: 1, borderColor: 'yellow', width: '80%'}}>
        <Text>{props.label}</Text>
      </View>
      <View style={{left: 30,borderWidth:1,borderColor:'green',width: '80%'}}>
        <TextInput
          style={{
            borderBottomColor: props.activeBorder == true ? 'red' : 'green',
            borderBottomWidth:
              props.value != '' && props.showBorder == true ? 1 : 0,
          }}
          placeholder={props.label}
          {...props}
        />
      </View>
    </View>
  );
};

export default AppInput;
