import { View, Text } from 'react-native';
import React from 'react';
import { ViewProps } from 'react-native';

interface ProgressBarProps extends ViewProps {
  progress: number; // Progress value between 0 and 1
}

const ProgressBar = (props: ProgressBarProps) => {
  const { progress, style, ...otherProps } = props;

  // Calculate the width of the progress bar based on progress value
  const progressBarWidth = `${progress * 10}%`;

  return (
    <View style={[{ backgroundColor: '#ddd', height: 7, borderRadius: 10,width:"100%" }, style]} {...otherProps}>
      <View style={{ backgroundColor: '#007bff', height: '100%', width: progressBarWidth, borderRadius: 10 }} />
    </View>
  );
};

export default ProgressBar;
