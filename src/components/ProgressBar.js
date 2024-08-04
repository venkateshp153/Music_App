// import { View, Text } from 'react-native';
// import React from 'react';
// import { ViewProps } from 'react-native';

// interface ProgressBarProps extends ViewProps {
//   progress: number; // Progress value between 0 and 1
// }

// const ProgressBar = (props: ProgressBarProps) => {
//   const { progress, style, ...otherProps } = props;

//   // Calculate the width of the progress bar based on progress value
//   const progressBarWidth = `${progress * 10}%`;

//   return (
//     <View style={[{ backgroundColor: '#ddd', height: 7, borderRadius: 10,width:"100%" }, style]} {...otherProps}>
//       <View style={{ backgroundColor: '#007bff', height: '100%', width: progressBarWidth, borderRadius: 10 }} />
//     </View>
//   );
// };

// export default ProgressBar;


import React from 'react';
import { View, ViewProps, StyleSheet } from 'react-native';

interface ProgressBarProps extends ViewProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = (props) => {
  const { progress, style, ...otherProps } = props;
  const clampedProgress = Math.min(100, Math.max(0, progress));
  const progressBarWidth = `${clampedProgress}%`;

  return (
    <View style={[styles.progressBarContainer, style]} {...otherProps}>
      <View style={[styles.progressBarFill, { width: progressBarWidth }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  progressBarContainer: {
    backgroundColor: '#007bff',
    height: 7,
    borderRadius: 10,
    width: '100%',
  },
  progressBarFill: {
    backgroundColor: '#eee',
    height: '100%',
    borderRadius: 10,
  },
});

export default ProgressBar;















// import React from 'react';
// import { View, ViewProps, StyleSheet } from 'react-native';

// // Define the ProgressBarProps interface outside of the component
// interface ProgressBarProps extends ViewProps {
//   progress: number; // Progress value between 0 and 1
// }

// // Define the ProgressBar component
// const ProgressBar: React.FC<ProgressBarProps> = (props) => {
//   const { progress, style, ...otherProps } = props;

//   // Ensure the progress value is clamped between 0 and 100
//   const clampedProgress = Math.min(100, Math.max(0, progress));

//   // Calculate the width of the progress bar based on progress value
//   const progressBarWidth = `${clampedProgress}%`;

//   return (
//     <View style={[styles.progressBarContainer, style]} {...otherProps}>
//       <View style={[styles.progressBarFill, { width: progressBarWidth }]} />
//     </View>
//   );
// };

// // Define styles for the ProgressBar component
// const styles = StyleSheet.create({
//   progressBarContainer: {
//     backgroundColor: '#ddd',
//     height: 7,
//     borderRadius: 10,
//     width: '100%',
//   },
//   progressBarFill: {
//     backgroundColor: '#007bff',
//     height: '100%',
//     borderRadius: 10,
//   },
// });
