import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
  Alert,
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
import {getData, postData, timetableURL} from '../api';
import {useDispatch} from 'react-redux';
import {size} from '../styles/sizes';

const TimeTable = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [image, setImage] = useState('');
  const [progress, setProgress] = useState(0);
  const [timetables, setTimetables] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const dispatch = useDispatch();
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

  const fetchTimetables = () =>
    getData(timetableURL)
      .then(responseData => {
        setTimetables(responseData.data);
        console.log('Response data:', responseData);
      })
      .catch(error => {
        console.error('Error:', error);
      });

  const handleOptionClick = option => {
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
  const clickOpenTimeTableImage = () => {};
  const handleOnLongPress = itemId => {
    if (selectedItems.includes(itemId)) {
      setSelectedItems(selectedItems.filter(item => item !== itemId));
    } else {
      setSelectedItems([...selectedItems, itemId]);
    }
  };
  const renderOptionsContent = () => {
    switch (selectedOption) {
      case 'Option 1':
        return (
          <ScrollView contentContainerStyle={styles.timeTableListView}>
            {timetables.map(timetable => (
              <View key={timetable._id} style={styles.timetableImageView}>
                <TouchableOpacity
                  style={{
                    position: 'absolute',
                    top: 5,
                    left: 5,
                    borderWidth: 1,
                    zIndex: 1,
                    alignSelf: 'flex-end',
                    backgroundColor: colors.baseGray05,
                  }}
                  onPress={() => clickOpenTimeTableImage(item)}
                  onLongPress={() => handleOnLongPress(timetable.id)}>
                  <Icon name="check" />
                </TouchableOpacity>
                <Text
                  style={
                    styles.timetableInfo
                  }>{`${timetable.clas} - ${timetable.section}`}</Text>
                <Image
                  source={{uri: timetable.timetableUrl}}
                  style={styles.timeTableListImg}
                />
              </View>
            ))}
          </ScrollView>
        );
      case 'Option 2':
        return (
          <ScrollView>
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
            {/* {image && <Image style={{height:150,width:150}} source={{uri:image}}/>} */}
            <TouchableOpacity
              style={styles.timetableUploadBtn}
              onPress={ImagePicker}>
              <Text style={{color: colors.primaryColor}}>Upload</Text>
            </TouchableOpacity>
          </ScrollView>
        );

      default:
        return null;
    }
  };

  const ImagePicker = () => {
    if (
      (school.value !== '' &&
        school.errorActive === false &&
        classValue.value !== '' &&
        classValue.errorActive === false,
      section.value !== '' && section.errorActive === false)
    ) {
      let options = {
        mediaType: 'photo',
        maxWidth: 800,
        maxHeight: 800,
        quality: 1,
        allowsEditing: true,
        aspect: [3, 4],
      };

      launchImageLibrary(options, async response => {
        try {
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (!response.didCancel) {
            // Ensure there's at least one selected asset
            const selectedImage = response.assets[0];
            setImage({uri: selectedImage.uri});
            saveImage(selectedImage.uri);
            await uploadImage(selectedImage.uri, 'image');
          } else {
            console.log('No image selected');
          }

          if (image.uri != '') {
            setModalVisible(true);
          } else {
            setModalVisible(false);
          }
        } catch (error) {
          console.log('Error selecting image:', error);
        }
      });
    } else {
      Alert.alert('Error', 'Please fill in all fields');
    }
  };

  const saveImage = async uri => {
    try {
      if (!uri) {
        console.log('Error: URI is undefined');
        return;
      }
      const fileName = uri.split('/').pop();
      const destPath = `${RNFS.DocumentDirectoryPath}/${fileName}`;
      const docRef = await addDoc(collection(db, 'files'), {
        fileType,
        url,
        createdAt,
      });
      console.log('document saved correctly', docRef.id);
      await RNFS.copyFile(uri, destPath);
      console.log('Image saved successfully:', destPath);
    } catch (error) {
      console.log('Error saving image:', error);
    }
  };

  const uploadImage = async (uri, fileType) => {
    if (!school.value || !classValue.value || !section.value) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    try {
      const response = await fetch(uri);
      console.log(response);
      const blob = await response.blob();
      const storageRef = ref(
        storage,
        'files/timetables/' + new Date().getTime(),
      );
      const uploadTask = uploadBytesResumable(storageRef, blob);

      uploadTask.on(
        'state_changed',
        snapshot => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 10;
          console.log('Upload is ' + progress + '% done');
          setProgress(progress);
        },
        error => {
          console.log(error, '==>error');
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

          console.log('File available at', downloadURL);
          // Save the record to the database
          await saveRecord(fileType, downloadURL, new Date().toISOString());
          let params = {
            clas: classValue.value,
            section: section.value,
            school: school.value,
            timetableUrl: downloadURL,
          };
          postData(timetableURL, params)
            .then(responseData => {
              console.log('Response data:', responseData);
            })
            .catch(error => {
              console.error('Error:', error);
            });
          setImage('');
        },
      );
    } catch (error) {
      console.error('Error uploading image:', error);
      // Handle error here
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

  useEffect(() => {
    fetchTimetables();
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: colors.primaryColor}}>
      <TopBar
        onPress={() => navigation.openDrawer()}
        imageSource={require('../assets/images/schoolImg.jpg')}
      />
      {image.uri && (
        <CustomModal
          visible={modalVisible}
          closeModal={false}
          onClose={() => {
            setModalVisible(false);
          }}
          component={
            <Uploading
              image={image}
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
            onPress={() => handleOptionClick('Option 1')}>
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
