import {View, Text, TextInput, TextInputProps, Image} from 'react-native';
import React from 'react';
import {colors} from '../styles/colors';

interface Props extends TextInputProps {
  label: String;
  showLabel: Boolean;
  activeBorder: Boolean;
  showBorder: Boolean;
  value: String;
  inputIcon: String;
}

const AppInput = (props: Props) => {
  return (
    <>
      {props.showLabel == true ? (
        <View style={{left: 20, height: 20, width: '75%'}}>
          <Text style={{color:colors.textColor}}>{props.label}</Text>
        </View>
      ) : (
        <></>
      )}
      <View
        style={{
          height: 40,
          margin: 5,
          paddingLeft:10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignSelf: 'center',
          width: '85%',
          backgroundColor: '#E8EAE6',
          borderBottomColor:
            props.activeBorder == true ? colors.error : colors.success,
          borderBottomWidth:
            props.value != '' && props.showBorder == true ? 1 : 0,
          borderRadius: 5,
        }}>
         {/* <View style={{flex: 0.1, alignSelf: 'center'}}>
            <Image
              source={require('../assets/images/check.png')}
              style={{width: 20, height: 20, alignSelf: 'center'}}
            />
          </View> */}
        <View style={{flex: 0.9}}>
          <TextInput
            style={{
              width:'90%',
              height: 40,
              textAlign: 'left',
              alignItems: 'center',
              color: '#000',
            }}
            placeholder={props.label}
            {...props}
            placeholderTextColor="#B4B4B3"
          />
        </View>
      
        {props.activeBorder != true && props.value != "" ? (
          <View style={{flex: 0.1, alignSelf: 'center'}}>
            <Image
              source={require('../assets/images/check.png')}
              style={{width: 12, height: 12, alignSelf: 'center'}}
            />
          </View> 
        ) : (
          < ></>
        )}
      </View>
    </>
  );
};

export default AppInput;
