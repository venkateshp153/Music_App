// import React, {useState, useEffect} from 'react';
// import {View, TouchableOpacity, FlatList, Image} from 'react-native';
// import TopBar from '../components/TopBar';
// import CustomModal from '../components/CustomModal';
// import Uploading from '../components/Uploading';
// import {colors} from '../styles/colors';
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
// import RNFS from 'react-native-fs';
// import {uploadBytesResumable, ref, getDownloadURL} from 'firebase/storage';
// import {addDoc, collection, onSnapshot} from 'firebase/firestore';
// import {storage, db} from '../assets/utility/firebaseConfig';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// const TimeTable = ({navigation}) => {
//   const [modalVisible, setModalVisible] = useState(false);
//   const [image, setImage] = useState('');
//   const [progress, setProgress] = useState(0);
//   // const [files, setFiles] = useState([]);

//   const ImagePicker = () => {
//     let options = {
//       mediaType: 'photo',
//       maxWidth: 800,
//       maxHeight: 800,
//       quality: 1,
//       allowsEditing: true,
//       aspect: [3, 4],
//     };

//     launchImageLibrary(options, async response => {
//       try {
//         if (response.didCancel) {
//           console.log('User cancelled image picker');
//         } else if (response.error) {
//           console.log('ImagePicker Error: ', response.error);
//         } else if (!response.didCancel) {
//           // Ensure there's at least one selected asset
//           const selectedImage = response.assets[0];
//           setImage({uri: selectedImage.uri});
//           saveImage(selectedImage.uri);
//           await uploadImage(selectedImage.uri, 'image');
//         } else {
//           console.log('No image selected');
//         }

//         if (image.uri != '') {
//           setModalVisible(true);
//         } else {
//           setModalVisible(false);
//         }
//       } catch (error) {
//         console.log('Error selecting image:', error);
//       }
//     });
//   };

//   const saveImage = async uri => {
//     try {
//       if (!uri) {
//         console.log('Error: URI is undefined');
//         return;
//       }
//       const fileName = uri.split('/').pop();
//       const destPath = `${RNFS.DocumentDirectoryPath}/${fileName}`;
//       const docRef = await addDoc(collection(db, 'files'), {
//         fileType,
//         url,
//         createdAt,
//       });
//       console.log('document saved correctly', docRef.id);
//       await RNFS.copyFile(uri, destPath);
//       console.log('Image saved successfully:', destPath);
//     } catch (error) {
//       console.log('Error saving image:', error);
//     }
//   };

//   const uploadImage = async (uri, fileType) => {
//     try {
//       const response = await fetch(uri);
//       console.log(response);
//       const blob = await response.blob();
//       const storageRef = ref(storage, 'Stuff/' + new Date().getTime());
//       const uploadTask = uploadBytesResumable(storageRef, blob);

//       uploadTask.on(
//         'state_changed',
//         snapshot => {
//           const progress =
//             (snapshot.bytesTransferred / snapshot.totalBytes) * 10;
//           console.log('Upload is ' + progress + '% done');
//           setProgress(progress);
//         },
//         error => {
//           // handle error
//         },
//         async () => {
//           const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
//           console.log('File available at', downloadURL);
//           // Save the record to the database
//           await saveRecord(fileType, downloadURL, new Date().toISOString());
//           // Clear image state or perform any necessary cleanup
//           setImage('');
//         },
//       );
//     } catch (error) {
//       console.error('Error uploading image:', error);
//       // Handle error here
//     }
//   };

//   // Example usage:
//   // uploadImage('file://path_to_image.jpg', 'jpg');

//   async function saveRecord(fileType, url, createdAt) {
//     try {
//       const docRef = await addDoc(collection(db, 'files'), {
//         fileType,
//         url,
//         createdAt,
//       });
//       console.log('document saved correctly', docRef.id);
//     } catch (e) {
//       console.log(e);
//     }
//   }

//   // useEffect(() => {
//   //   const unsubscribe = onSnapshot(collection(db, 'files'), snapshot => {
//   //     snapshot.docChanges().forEach(change => {
//   //       if (change.type === 'added') {
//   //         console.log('New file', change.doc.data());
//   //         // setFiles(prevFiles => [...prevFiles, change.doc.data()]);
//   //       }
//   //     });
//   //   });
//   //   return () => unsubscribe();
//   // }, []);
//   return (
//     <View style={{flex: 1, backgroundColor: colors.primaryColor}}>
//       <TopBar
//         onPress={() => navigation.openDrawer()}
//         imageSource={require('../assets/images/schoolImg.jpg')}
//       />
//       {/* <FlatList
//         data={files}
//         keyExtractor={item => item.url}
//         renderItem={({item}) => {
//           if (item.fileType === 'image') {
//             return (
//               <Image
//                 source={{uri: item.url}}
//                 style={{width: '100%', height:800}}
//               />
//             );
//           }
//         }}
//         numColumns={3}
//         contentContainerStyle={{gap: 2}}
//         columnWrapperStyle={{gap: 2}}
//       /> */}
//      {image.uri && <CustomModal
//         visible={modalVisible}
//         closeModal={false}
//         onClose={() => {
//           setModalVisible(false);
//         }}
//         component={
//           <Uploading
//             image={image}
//             progress={progress}
//             close={() => {
//               setModalVisible(false);
//             }}
//           />
//         }
//       />}

//       <TouchableOpacity
//         style={{
//           position: 'absolute',
//           bottom: 120,
//           right: 20,
//           width: 44,
//           height: 44,
//           backgroundColor: colors.darkColor,
//           alignItems: 'center',
//           justifyContent: 'center',
//           borderRadius: 22,
//         }}
//         onPress={ImagePicker}>
//         <Icon name="tray-arrow-up" size={22} color="white" />
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default TimeTable;



// import React, { useState } from 'react';
// import { View, Text, Button } from 'react-native';
// import SegmentedControl from '@react-native-segmented-control/segmented-control';

// const SegmentComponent = () => {
//   const [selectedIndex, setSelectedIndex] = useState(0);
//   const items = ['Segment 1', 'Segment 2', 'Segment 3'];

//   const handleSegmentChange = (index) => {
//     setSelectedIndex(index);
//   };

//   const handleButtonClick = () => {
//     switch(selectedIndex) {
//       case 0:
//         // Logic for button click when Segment 1 is selected
//         console.log("Button clicked for Segment 1");
//         break;
//       case 1:
//         // Logic for button click when Segment 2 is selected
//         console.log("Button clicked for Segment 2");
//         break;
//       case 2:
//         // Logic for button click when Segment 3 is selected
//         console.log("Button clicked for Segment 3");
//         break;
//       default:
//         break;
//     }
//   };

//   return (
//     <View>
//       <SegmentedControl
//         values={items}
//         selectedIndex={selectedIndex}
//         onChange={handleSegmentChange}
//       />
//       <Button
//         title="Click me"
//         onPress={handleButtonClick}
//       />
//       <Text>Selected Segment: {items[selectedIndex]}</Text>
//     </View>
//   );





import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import SegmentedControl from '@react-native-segmented-control/segmented-control';

const App = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleIndexChange = (index) => {
    setSelectedIndex(index);
  };

  return (
    <View style={styles.container}>
      <SegmentedControl
        values={['Segment 1', 'Segment 2', 'Segment 3']}
        selectedIndex={selectedIndex}
        onChange={handleIndexChange}
      />
      {selectedIndex === 0 && <View style={[styles.segmentView, { backgroundColor: 'red' }]} />}
      {selectedIndex === 1 && <View style={[styles.segmentView, { backgroundColor: 'green' }]} />}
      {selectedIndex === 2 && <View style={[styles.segmentView, { backgroundColor: 'blue' }]} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    
  },
  segmentView: {
    flex: .4,
    width: '100%',
    
   
  },
});

export default App;
