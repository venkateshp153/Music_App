import {View, Text, TextInput, TextInputProps, Image} from 'react-native';
import React from 'react';
import {colors} from '../styles/colors';

interface Props extends TextInputProps {
  label: String;
  showLabel: Boolean;
  activeBorder: Boolean;
  showBorder: Boolean;
  value: String;
  inputIcon: Any;
  style: Any;
  errorLabel: String;
}

const AppInput = (props: Props) => {
  return (
    <View style={{width: '95%', alignSelf: 'center', marginBottom: 5}}>
      {props.showLabel == true ? (
        <View style={{left: 30, height: 20, width: '75%'}}>
          <Text style={{color: colors.textColor}}>{props.label}</Text>
        </View>
      ) : (
        <></>
      )}

      <View
        style={{
          height: 40,
          margin: 2,
          paddingLeft: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignSelf: 'center',
          width: '100%',
          borderBottomColor:
            props.activeBorder && props.showBorder ? 'red' : 'purple',
          borderBottomWidth: 1,
          ...props.style,
        }}>
        <View
          style={{
            flex: 0.1,
            alignSelf: 'center',
            borderRightColor: 'black',
            borderRightWidth: 1,
            paddingRight: 5,
          }}>
          {props.inputIcon && (
            <Image
              source={props.inputIcon}
              style={{width: 20, height: 20, alignSelf: 'baseline'}}
            />
          )}
        </View>

        <View style={{flex: 0.9}}>
          <TextInput
            style={{
              width: '90%',
              height: 40,
              textAlign: 'left',
              paddingLeft: 10,
              alignItems: 'center',
              color: '#000',
            }}
            placeholder={props.label}
            {...props}
            placeholderTextColor="#B4B4B3"
          />
        </View>
      </View>
      <Text style={{color: colors.textColor, alignSelf: 'flex-end'}}>
        {props.errorLabel}
      </Text>
    </View>
  );
};

export default AppInput;
