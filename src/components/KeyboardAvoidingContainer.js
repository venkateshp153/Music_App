import React from 'react';
import {
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView
} from 'react-native';
import {useHeaderHeight} from '@react-navigation/elements';
const KeyboardAvoidingContainer = ({
  children,
  style,
  backgroundColor,
  headerAvailable = true,
}) => {
  const headerHeight = headerAvailable ? useHeaderHeight() + 10 : 10;
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: backgroundColor || '#f9fafb'}}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={10}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[{ padding: 20,paddingTop:headerAvailable ? 25 : Platform.OS === 'android' ? 20 : 20,},style]}>
          {children}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};


export default KeyboardAvoidingContainer;
