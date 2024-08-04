import React, {useState, useEffect,useRef} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
  Alert,
  Keyboard,
} from 'react-native';
import {styles} from '../styles/styles';
import TopBar from '../components/TopBar';
import CustomModal from '../components/CustomModal';
import Uploading from '../components/Uploading';
import {colors} from '../styles/colors';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import RNFS from 'react-native-fs';
import {uploadBytesResumable, ref, getDownloadURL} from 'firebase/storage';
import {addDoc, collection, onSnapshot} from 'firebase/firestore';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {storage, db} from '../assets/utility/firebaseConfig';
import AppInput from '../components/AppInput';
import {obj} from '../assets/utility/obj';
import {deleteTimetablesById, postRequest} from '../api';
import {useDispatch, useSelector} from 'react-redux';
import {size} from '../styles/sizes';
import {getTimetables} from '../redux/features/AuthSlice';


const TimeTable = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [image, setImage] = useState('');
  const [progress, setProgress] = useState(0);
  const [isFocused, setIsFocused] = useState(false);
  const dispatch = useDispatch();
  const {timetableData} = useSelector(state => state.timetables);
  const [school, setSchool] = useState({
    value: '',
    errorActive: false,
    errorMessage: '',
    verify: false,
  });

  const [classValue, setClassValue] = useState({
    value: '',
    errorActive: false,
    errorMessage: '',
    verify: false,
  });

  const [section, setSection] = useState({
    value: '',
    errorActive: false,
    errorMessage: '',
    verify: false,
  });

  const [selectedOption, setSelectedOption] = useState('Option 1');
  const [segBtnColor, setSegBtnColor] = useState('Option 1');
  const [selectItem, setSelectItem] = useState({
    select: false,
    selectedItemId: [],
  });
  const scrollViewRef = useRef(null);
  const handleOnLongPress = id => {
    if (!selectItem.select) {
      setSelectItem({
        select: true,
        selectedItemId: [id],
      });
    }
  };

  const handlePress = id => {
    if (selectItem.select) {
      const newSelectedItemId = selectItem.selectedItemId.includes(id)
        ? selectItem.selectedItemId.filter(itemId => itemId !== id)
        : [...selectItem.selectedItemId, id];

      setSelectItem({
        ...selectItem,
        selectedItemId: newSelectedItemId,
      });
    }
  };

  const handleDelete = async () => {
    Alert.alert(
      'Confirm Delete',
      'Are you sure you want to delete selected items?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: async () => {
            try {
              const deletedItems = await Promise.all(
                selectItem.selectedItemId.map(async id => {
                  console.log(id);
                  return deleteTimetablesById([id]); 
                }),
              );
              console.log('Deleted items:', deletedItems);
              setSelectItem({
                select: false,
                selectedItemId: [],
              });
              effect_togetTimetable();
            } catch (err) {
              console.log('error', err);
            }
          },
        },
      ],
      {cancelable: false},
    );
  };
const handleCancel = () => {
  setSelectItem({
    select: false,
    selectedItemId: [],
  });
}
  const handleOptionClick = option => {
    // effect_togetTimetable()
    setSelectedOption(option);
    setSegBtnColor(option);
  };
  const handleSchoolInputChange = text => {
    let inputValue = text;
    let val = obj.regex.timetableInfo.test(text);
    setSchool({
      ...school,
      value: inputValue,
      verify: val,
      errorMessage: false ? 'Incorrect School name' : '',
    });
    console.log(val, inputValue);
  };
  const handleClassInputChange = text => {
    let inputValue = text;
    let val = obj.regex.timetableInfo.test(text);
    setClassValue({
      ...classValue,
      value: inputValue,
      verify: val,
      errorMessage: false ? 'Incorrect Class name' : '',
    });
  };
  const handleSectionInputChange = text => {
    let inputValue = text;
    let val = obj.regex.timetableInfo.test(text);
    setSection({
      ...section,
      value: inputValue,
      verify: val,
      errorMessage: false ? 'Incorrect Section name' : '',
    });
  };
  const handleSchoolInputOnBlur = () => {
    if (
      school.value === '' ||
      school.value === undefined ||
      school.value === null
    ) {
      setSchool({
        ...school,
        errorActive: true,
        errorMessage: 'Fill in your school name',
      });
      console.log(
        `${school.errorMessage} ===> error ==> ${school.errorActive}`,
      );
    } else if (school.value.match(obj.regex.timetableInfo)) {
      setSchool({
        ...school,
        errorActive: false,
        errorMessage: '',
      });
      console.log(
        `It's a Match ${school.errorMessage} ===> error ==>${school.errorActive}`,
      );
    } else {
      setSchool({
        ...school,
        errorActive: true,
        errorMessage: 'incorrect school name',
      });
      console.log(
        `It's not a Matched  ${school.errorMessage} ===> error ==>${school.errorActive}`,
      );
    }
  };
  const handleClassValueInputOnBlur = () => {
    if (
      classValue.value === '' ||
      classValue.value === undefined ||
      classValue.value === null
    ) {
      setClassValue({
        ...classValue,
        errorActive: true,
        errorMessage: 'Fill in your class name',
      });
      console.log(
        `${classValue.errorMessage} ===> error ==> ${classValue.errorActive}`,
      );
    } else if (classValue.value.match(obj.regex.timetableInfo)) {
      setClassValue({
        ...classValue,
        errorActive: false,
        errorMessage: '',
      });
      console.log(
        `It's a Match ${classValue.errorMessage} ===> error ==>${classValue.errorActive}`,
      );
    } else {
      setClassValue({
        ...classValue,
        errorActive: true,
        errorMessage: 'incorrect class value',
      });
      console.log(
        `It's not a Matched  ${classValue.errorMessage} ===> error ==>${classValue.errorActive}`,
      );
    }
  };
  const handleSectionInputOnBlur = () => {
    if (
      section.value === '' ||
      section.value === undefined ||
      section.value === null
    ) {
      setSection({
        ...section,
        errorActive: true,
        errorMessage: 'Fill in your section',
      });
      console.log(
        `${section.errorMessage} ===> error ==> ${section.errorActive}`,
      );
    } else if (section.value.match(obj.regex.timetableInfo)) {
      setSection({
        ...section,
        errorActive: false,
        errorMessage: '',
      });
      console.log(
        `It's a Match ${section.errorMessage} ===> error ==>${section.errorActive}`,
      );
    } else {
      setSection({
        ...section,
        errorActive: true,
        errorMessage: 'incorrect section',
      });
      console.log(
        `It's not a Matched  ${section.errorMessage} ===> error ==>${section.errorActive}`,
      );
    }
  };
  const handleFocus = () => {
    setIsFocused(true);
  };

  const pickImage = () => {
    let options = {
      mediaType: 'photo',
      maxWidth: 800,
      maxHeight: 800,
      quality: 1,
      allowsEditing: true,
      aspect: [3, 4],
    };
    
      if (classValue.value === '' && section.value === "" && school.value==="") {
        Alert.alert('Input Required', 'Please fill in the input before selecting an image.');
        return;
      }
    launchImageLibrary(options, async response => {
      try {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (!response.didCancel) {
          const selectedImage = response.assets[0];
          setImage({uri: selectedImage.uri});
          saveImage(selectedImage.uri);
          // uploadImage(selectedImage.uri, "image")
        } else {
          console.log('No image selected');
        }
      } catch (error) {
        console.log('Error selecting image:', error);
      }
    });
  };

  const saveImage = async uri => {
    try {
      if (!uri) {
        console.log('Error: URI is undefined');
        return;
      }
      const fileName = uri.split('/').pop();
      const destPath = `${RNFS.DocumentDirectoryPath}/${fileName}`;
      await RNFS.copyFile(uri, destPath);
      console.log('Image saved successfully:', destPath);
    } catch (error) {
      console.log('Error saving image:', error);
    }
  };
  const uploadImage = async (uri, fileType) => {
    if (!school || !classValue || !section || !image) {
      Alert.alert('Error', 'Please fill in all fields and select an image');
      return;
    }
  
    try {
      const response = await fetch(uri);
      const blob = await response.blob();
      const storageRef = ref(
        storage,
        'files/timetables/' + new Date().getTime(),
      );
      const uploadTask = uploadBytesResumable(storageRef, blob);
      setModalVisible(true);
  
      // Track the last progress logged to avoid redundant logs
      let lastLoggedProgress = 0;
  
      uploadTask.on(
        'state_changed',
        snapshot => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          const roundedProgress = Math.round(progress);
  
          // Log progress only if it has changed significantly
          if (roundedProgress > lastLoggedProgress) {
            lastLoggedProgress = roundedProgress;
  
            // Log with a slight delay to slow down the updates
            setTimeout(() => {
              console.log('Upload is ' + lastLoggedProgress + '% done');
            }, 100); // Adjust delay as needed
          }
        },
        error => {
          console.log('Upload error:', error);
          setModalVisible(false);
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          console.log('File available at', downloadURL);
  
          let params = {
            clas: classValue.value,
            imageUrl: downloadURL,
            schoolName: school.value,
            section: section.value,
          };
          await postRequest('/timetables', params)
            .then(responseData => {
              console.log('Response data:', responseData);
            })
            .catch(error => {
              console.error('Error:', error);
            });
          await saveRecord(fileType, downloadURL, new Date().toISOString());
          // Save the record to the database
          await addDoc(collection(db, 'files'), {
            fileType: 'image',
            url: downloadURL,
            createdAt: new Date().toISOString(),
          });
          setImage('');
          setModalVisible(false);
        },
      );
    } catch (error) {
      console.error('Error uploading image:', error);
      setModalVisible(false);
    }
  };
  
  async function saveRecord(fileType, url, createdAt) {
    try {
      const docRef = await addDoc(collection(db, 'files'), {
        fileType,
        url,
        createdAt,
      });
      console.log('document saved correctly', docRef.id);
      setSchool({...school, value: ''});
      setClassValue({...classValue, value: ''});
      setSection({...section, value: ''});
    } catch (e) {
      console.log(e);
    }
  }



  const scrollToEnd = () => {
    Keyboard.dismiss()
    scrollViewRef.current.scrollToEnd({ animated: true });
  };



  const effect_togetTimetable = () => {
    return new Promise((resolve, reject) => {
      dispatch(getTimetables())
        .then(() => {
          console.log('dispatched');
          resolve(); // Resolve the promise if dispatch is successful
        })
        .catch(error => {
          reject(error); // Reject the promise if dispatch fails
        });
    });
  };
  const renderOptionsContent = () => {
    switch (selectedOption) {
      case 'Option 1':
        return (
          <>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                backgroundColor: '#EEEEEE',
                position: 'relative',
                top: 0,
                height: 30,
              }}>
              <TouchableOpacity
                style={{marginHorizontal: 10, justifyContent: 'center'}}
                onPress={() => effect_togetTimetable()}>
                <Icon
                  size={20}
                  name="refresh"
                  style={{color: colors.darkColor}}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{marginHorizontal: 10, justifyContent: 'center'}}>
                <Icon size={20} name="filter-menu-outline" />
              </TouchableOpacity>
            </View>
            {timetableData?<ScrollView contentContainerStyle={styles.timeTableListView}>
              {timetableData.map(timetable => (
                <TouchableOpacity
                  key={timetable._id}
                  style={styles.timetableImageView}
                  onPress={() => handlePress(timetable._id)}
                  onLongPress={() => handleOnLongPress(timetable._id)}>
                  {selectItem.select && (
                    <View style={styles.cancel_Check_Btns}>
                      <Icon
                        name={
                          selectItem.selectedItemId.includes(timetable._id)
                            ? 'checkbox-marked'
                            : 'checkbox-blank-outline'
                        }
                      />
                    </View>
                  )}
                  <Text
                    style={
                      styles.timetableInfo
                    }>{`${timetable.clas} - ${timetable.section}`}</Text>
                  <Image
                    source={{uri: timetable.imageUrl}}
                    style={styles.timeTableListImg}
                  />
                </TouchableOpacity>
              ))}
            </ScrollView>:<></>}
            {selectItem.select && (
              <View style={{height:30,width:"100%",position:"relative",flexDirection:"row",alignSelf:"flex-end",justifyContent:"space-evenly"}}>
                <TouchableOpacity
                  style={{
                    // padding: 10,
                    width: 30,
                    alignSelf: 'center',
                    alignItems: 'center',
                  }}
                  onPress={handleDelete}>
                  <Image
                    source={require('../assets/images/bin.png')}
                    style={{
                      width: 25,
                      height: 25,
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    // padding: 10,
                    width: 30,
                    alignSelf: 'center',
                    alignItems: 'center',
                  }}
                  onPress={handleCancel}>
                 
               
                  <Image
                    source={require('../assets/images/cross.png')}
                    style={{
                      width: 30,
                      height: 30,
                    }}
                  />
                </TouchableOpacity>
              </View>
            )}
          </>
        );
      case 'Option 2':
        return (
           <ScrollView ref={scrollViewRef}>
            <Text
              style={{
                marginVertical: 12,
                alignSelf: 'center',
                borderBottomWidth: 1,
                fontSize: size.xsmall,
              }}>
              Fill in details to upload timetable
            </Text>

            <AppInput
              label="Enter School Name"
              showLabel={true}
              showBorder={true}
              activeBorder={school.errorActive && isFocused}
              value={school.value}
              onFocus={() => handleFocus()}
              onChangeText={text => handleSchoolInputChange(text)}
              onBlur={() => handleSchoolInputOnBlur()}
              errorLabel={school.errorMessage}
              style={styles.timeTableInput}
            />
            <AppInput
              label="Enter Class"
              showLabel={true}
              showBorder={true}
              editable={image.uri?false:true}
              activeBorder={classValue.errorActive && isFocused}
              value={classValue.value}
              onFocus={() => handleFocus()}
              onChangeText={text => handleClassInputChange(text)}
              onBlur={() => handleClassValueInputOnBlur()}
              errorLabel={classValue.errorMessage}
              style={styles.timeTableInput}
            />
            <AppInput
              label="Enter Section"
              showLabel={true}
              showBorder={true}
              activeBorder={section.errorActive && isFocused}
              value={section.value}
              onFocus={() => handleFocus()}
              onChangeText={text => handleSectionInputChange(text)}
              onBlur={() => handleSectionInputOnBlur()}
              errorLabel={section.errorMessage}
              style={styles.timeTableInput}
            />

            {image === '' ? (
              <TouchableOpacity
                style={styles.timetableUploadBtn}
                onPress={pickImage}>
                <Text style={{color: colors.primaryColor}}>Pick Image</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.timetableUploadBtn}
                onPress={() => uploadImage(image.uri, 'image')}>
                <Text style={{color: colors.primaryColor}}>Upload Image</Text>
              </TouchableOpacity>
            )}
            {image.uri && scrollToEnd()}
            {image &&  (
              <View
                style={{
                  borderWidth: 1,
                  alignSelf: 'center',
                  marginVertical: 20,
                }}>
                <TouchableOpacity
                  onPress={() => setImage('')}
                  style={styles.cancel_Check_Btns}>
                  <Icon
                    name="close"
                    size={18}
                    style={{backgroundColor: colors.baseGray05}}
                  />
                </TouchableOpacity>
                <Image
                  style={{
                    marginVertical: 30,
                    height: 300,
                    width: 300,
                    resizeMode: 'contain',
                    alignSelf: 'center',
                  }}
                  source={{uri: image.uri}}
                />
              </View>
            )}
          </ScrollView>
        );

      default:
        return null;
    }
  };

  useEffect(() => {
    console.log(process.env.BASE_URL);
    effect_togetTimetable()
      .then(() => {
        console.log('Timetables fetched successfully');
      })
      .catch(error => {
        console.error('Error fetching timetables:', error);
      });
  }, [dispatch]);
  return (
    <View style={{flex: 1, backgroundColor: colors.primaryColor}}>
      <TopBar
        onPress={() => navigation.openDrawer()}
        imageSource={require('../assets/images/schoolImg.jpg')}
      />
      {image.uri &&(
        <CustomModal
          visible={modalVisible}
          closeModal={false}
          onClose={() => {
            setModalVisible(false);
          }}
          component={
            <Uploading
              // image={image}
              progress={progress}
              close={() => {
                setModalVisible(false);
              }}
            />
          }
        />
      )}

      <View
        style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
        <View style={styles.segmentButtonView}>
          <TouchableOpacity
            style={[
              styles.segmentButton,
              {
                backgroundColor:
                  segBtnColor === 'Option 1'
                    ? colors.headerColor
                    : colors.baseGray05,
              },
            ]}
            onPress={() => {
              handleOptionClick('Option 1'), effect_togetTimetable();
            }}>
            <Text
              style={[
                styles.segmentButtonText,
                {
                  color:
                    segBtnColor === 'Option 1'
                      ? colors.primaryColor
                      : colors.darkColor,
                },
              ]}>
              TimeTables
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.segmentButton,
              {
                backgroundColor:
                  segBtnColor === 'Option 2'
                    ? colors.headerColor
                    : colors.baseGray05,
              },
            ]}
            onPress={() => handleOptionClick('Option 2')}>
            <Text
              style={[
                styles.segmentButtonText,
                {
                  color:
                    segBtnColor === 'Option 2'
                      ? colors.primaryColor
                      : colors.darkColor,
                },
              ]}>
              Upload New
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.segmentDataView}>{renderOptionsContent()}</View>
      </View>
    </View>
  );
};

export default TimeTable;
