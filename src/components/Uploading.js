// import {View,Text,Image,TouchableOpacity} from 'react-native';
// import React from 'react';
// import {size} from '../styles/sizes';
// import {styles} from '../styles/styles';
// import {colors} from '../styles/colors';
// import ProgressBar from './ProgressBar';

// const Uploading = ({image,progress, close}) => {
//   return (
//     <View style={{width: 250, alignItems: 'center'}}>
//        <Image
//           source={image}
//           style={{
//             width: 100,
//             height: 100,
//             resizeMode: 'contain',
//             borderRadius: 6,
//           }}
//         />
//       <Text style={{color: colors.textColor, marginVertical : 10,fontSize:size.fontSize.small,fontWeight:"bold"}}>
//         Uploading...
//       </Text>
//       <ProgressBar progress={progress}/>
//       <View style={{borderTopWidth: 0.5,borderColor:colors.textColor,width:"100%",marginTop:10}}>
//         <TouchableOpacity onPress={close}>
//           <Text
//             style={{
//               color: colors.appThemeColor,
//               paddingTop: 10,
//               textAlign: 'center',
//               paddingBottom: 5,
//             }}>
//             Cancel
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default Uploading;
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ProgressBar from './ProgressBar'; // Adjust path if necessary

const Uploading = ({ progress, close }) => {
  return (
    <View style={{ width: 250, alignItems: 'center' }}>
      {/* <Image
        source={image}
        style={{
          width: 100,
          height: 30,
          resizeMode: 'contain',
          borderRadius: 6,
        }}
      /> */}
      <Text style={{ color: '#000', marginVertical: 10, fontSize: 14, fontWeight: 'bold' }}>
        Uploading...
      </Text>
      <ProgressBar progress={progress} />
      <View style={{ borderTopWidth: 0.5, borderColor: '#000', width: "100%", marginTop: 10 }}>
        <TouchableOpacity onPress={close}>
          <Text style={{ color: '#007bff', paddingTop: 10, textAlign: 'center', paddingBottom: 5 }}>
            Cancel
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Uploading;
