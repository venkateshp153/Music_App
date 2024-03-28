import {Alert} from 'react-native';
import XLSX from 'xlsx';
import RNFS from 'react-native-fs';
import DocumentPicker from 'react-native-document-picker';





export const createAppFolder = async () => {
  try {
    const folderPath = `${RNFS.DocumentDirectoryPath}/AppFolder`;
    await RNFS.mkdir(folderPath);
    Alert.alert('Success', 'App folder created successfully');
  } catch (error) {
    console.error('Error creating app folder:', error);
    Alert.alert('Error', 'Failed to create app folder');
  }
};

export const openAppFolder = async () => {
  try {
    const folderPath = `${RNFS.DocumentDirectoryPath}/AppFolder`;
    console.log(folderPath);
    await RNFS.readDir(folderPath);
  } catch (error) {
    console.error('Error opening app folder:', error);
    Alert.alert('Error', 'Failed to open app folder');
  }
};

export const createXLSXFile = async () => {
  try {
    const folderPath = `${RNFS.DocumentDirectoryPath}/AppFolder`;
    const filePath = `${folderPath}/dummy.xlsx`;

    const dummyData = [
      ['Age', 'Country', 'FirstName', 'Gender', 'Id', 'JoinDate', 'LastName'],
      [24, 'UK', 'Raj', 'Male', 1, 42990, 'Gill'],
      [28, 'IND', 'seema', 'Female', 2, 44590, 'Ghosh'],
      [38, 'USA', 'John', 'Male', 3, 44590, 'Rhodes'],
      [34, 'NZ', 'Steve', 'Male', 4, 44590, 'Harvey'],
      [29, 'AU', 'Bejimin', 'Male', 5, 44590, 'laster'],
      [25, 'AED', 'Linda', 'Female', 6, 44590, 'Butler'],
      [40, 'AU', 'Gerald', 'Male', 7, 44590, 'Farron'],
      [55, 'UK', 'Laura', 'Female', 8, 44590, 'Mike'],
      [22, 'USA', 'brian', 'Male', 9, 44590, 'Mikelson'],
    ];

    const ws = XLSX.utils.aoa_to_sheet(dummyData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1'); // Provide a sheet name when appending

    // Check if the file already exists
    const fileExists = await RNFS.exists(filePath);

    if (fileExists) {
      // Read the existing file
      const existingFileContent = await RNFS.readFile(filePath, 'base64');
      const existingWorkbook = XLSX.read(existingFileContent, {type: 'base64'});

      // Append new sheet to existing workbook
      XLSX.utils.book_append_sheet(existingWorkbook, ws, 'Sheet2');

      // Write the updated workbook back to the file
      const updatedWorkbookContent = XLSX.write(existingWorkbook, {
        type: 'base64',
        bookType: 'xlsx',
      });
      await RNFS.writeFile(filePath, updatedWorkbookContent, 'base64');
      console.log('XLSX file updated successfully at:', filePath);
    } else {
      // If the file doesn't exist, create a new one
      const wbout = XLSX.write(wb, {type: 'base64', bookType: 'xlsx'});
      await RNFS.writeFile(filePath, wbout, 'base64');
      console.log('XLSX file created successfully at:', filePath);
    }
  } catch (error) {
    console.error('Error creating/updating XLSX file:', error);
    // Handle error more gracefully, e.g., display a message to the user
  }
};
export const convertXLSXToJson = async () => {
  try {
    const res = await DocumentPicker.pick({
      type: [DocumentPicker.types.allFiles],
    });
    const base64 = await RNFS.readFile(res[0].uri, 'base64');

    const workbook = XLSX.read(base64, {type: 'base64'});
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];

    const json = XLSX.utils.sheet_to_json(sheet);
    console.log(json);
    setXLSXData(json);
  } catch (error) {
    console.error('Error converting XLSX to JSON:', error);
    Alert.alert('Error', 'Failed to convert XLSX to JSON');
  }
};
 export const convertAppFolderXLSXToJson = async () => {
   try {
     const folderPath = `${RNFS.DocumentDirectoryPath}/AppFolder`;
     const folderExists = await RNFS.exists(folderPath);
     if (!folderExists) {
       Alert.alert('Error', 'AppFolder does not exist');
       return;
     }
 
     const files = await RNFS.readdir(folderPath);
     const xlsxFile = files.find((file) => file.endsWith('.xlsx'));
 
     if (!xlsxFile) {
       Alert.alert('Error', 'No XLSX file found in AppFolder');
       return;
     }
 
     const filePath = `${folderPath}/${xlsxFile}`;
     const fileExists = await RNFS.exists(filePath);
     if (!fileExists) {
       Alert.alert('Error', 'XLSX file does not exist in AppFolder');
       return;
     }
 
     const base64 = await RNFS.readFile(filePath, 'base64');
 
     const workbook = XLSX.read(base64, { type: 'base64' });
     const sheetName = workbook.SheetNames[0];
     const sheet = workbook.Sheets[sheetName];
 
     const json = XLSX.utils.sheet_to_json(sheet);
     // Assuming setXLSXData is a state setter function
     setXLSXData(json);
   } catch (error) {
     console.error('Error converting XLSX to JSON:', error);
     Alert.alert('Error', 'Failed to convert XLSX to JSON');
   }
 };


 
//  const createAppFolder = async () => {
//   try {
//     const folderPath = `${RNFS.DocumentDirectoryPath}/AppFolder`;
//     await RNFS.mkdir(folderPath);
//     Alert.alert('Success', 'App folder created successfully');
//   } catch (error) {
//     console.error('Error creating app folder:', error);
//     Alert.alert('Error', 'Failed to create app folder');
//   }
// };
// const openAppFolder = async () => {
//   try {
//     const folderPath = `${RNFS.DocumentDirectoryPath}/AppFolder`;
//     console.log(folderPath)
//     await RNFS.readDir(folderPath);
//   } catch (error) {
//     console.error('Error opening app folder:', error);
//     Alert.alert('Error', 'Failed to open app folder');
//   }
// };
// const createXLSXFile = async () => {
//   try {
//     const folderPath = `${RNFS.DocumentDirectoryPath}/AppFolder`;
//     const filePath = `${folderPath}/dummy.xlsx`;

//     const dummyData = [
//       ["Age", "Country", "FirstName", "Gender", "Id", "JoinDate", "LastName"],
//       ["24", "UK", "Raj", "Male", "1", "42990", "Gill"],
//       ["28", "IND", "seema", "Female", "2", "44590", "Ghosh"],
//       ["38", "USA", "John", "Male", "3", "44590", "Rhodes"],
//       ["34", "NZ", "Steve", "Male", "4", "44590", "Harvey"],
//       ["29", "AU", "Bejimin", "Male", "5", "44590", "laster"],
//       ["25", "AED", "Linda", "Female", "6", "44590", "Butler"],
//       ["40", "AU", "Gerald", "Male", "7", "44590", "Farron"],
//       ["55", "UK", "Laura", "Female", "8", "44590", "Mike"],
//       ["22", "USA", "brian", "Male", "9", "44590", "Mikelson"]
//     ]
    

//     const ws = XLSX.utils.aoa_to_sheet(dummyData);
//     const wb = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(wb, ws, "Sheet1"); // Provide a sheet name when appending

//     // Check if the file already exists
//     const fileExists = await RNFS.exists(filePath);

//     if (fileExists) {
//       // Read the existing file
//       const existingFileContent = await RNFS.readFile(filePath, 'base64');
//       const existingWorkbook = XLSX.read(existingFileContent, { type: 'base64' });

//       // Append new sheet to existing workbook
//       XLSX.utils.book_append_sheet(existingWorkbook, ws, "Sheet2");

//       // Write the updated workbook back to the file
//       const updatedWorkbookContent = XLSX.write(existingWorkbook, { type: 'base64', bookType: 'xlsx' });
//       await RNFS.writeFile(filePath, updatedWorkbookContent, 'base64');
//       console.log('XLSX file updated successfully at:', filePath);
//     } else {
//       // If the file doesn't exist, create a new one
//       const wbout = XLSX.write(wb, { type: 'base64', bookType: 'xlsx' });
//       await RNFS.writeFile(filePath, wbout, 'base64');
//       console.log('XLSX file created successfully at:', filePath);
//     }
//   } catch (error) {
//     console.error('Error creating/updating XLSX file:', error);
//     // Handle error more gracefully, e.g., display a message to the user
//   }
// };



// const convertXLSXToJson = async () => {
//   try {
//     const res = await DocumentPicker.pick({
//       type: [DocumentPicker.types.allFiles],
//     });
//     const base64 = await RNFS.readFile(res[0].uri, 'base64');

//     const workbook = XLSX.read(base64, { type: 'base64' });
//     const sheetName = workbook.SheetNames[0];
//     const sheet = workbook.Sheets[sheetName];

//     const json = XLSX.utils.sheet_to_json(sheet);
//     console.log(json)
//     setXLSXData(json);

//   } catch (error) {
//     console.error('Error converting XLSX to JSON:', error);
//     Alert.alert('Error', 'Failed to convert XLSX to JSON');
//   }
// };
// const convertAppFolderXLSXToJson = async () => {
//   try {
//     const folderPath = `${RNFS.DocumentDirectoryPath}/AppFolder`;
//     const folderExists = await RNFS.exists(folderPath);
//     if (!folderExists) {
//       Alert.alert('Error', 'AppFolder does not exist');
//       return;
//     }

//     const files = await RNFS.readdir(folderPath);
//     const xlsxFile = files.find((file) => file.endsWith('.xlsx'));

//     if (!xlsxFile) {
//       Alert.alert('Error', 'No XLSX file found in AppFolder');
//       return;
//     }

//     const filePath = `${folderPath}/${xlsxFile}`;
//     const fileExists = await RNFS.exists(filePath);
//     if (!fileExists) {
//       Alert.alert('Error', 'XLSX file does not exist in AppFolder');
//       return;
//     }

//     const base64 = await RNFS.readFile(filePath, 'base64');

//     const workbook = XLSX.read(base64, { type: 'base64' });
//     const sheetName = workbook.SheetNames[0];
//     const sheet = workbook.Sheets[sheetName];

//     const json = XLSX.utils.sheet_to_json(sheet);
//     // Assuming setXLSXData is a state setter function
//     setXLSXData(json);
//   } catch (error) {
//     console.error('Error converting XLSX to JSON:', error);
//     Alert.alert('Error', 'Failed to convert XLSX to JSON');
//   }
// };

// const handleEdit = (id, field, value) => {
//   setEditingCell({ id, field });
//   setEditedData({ ...editedData, [id]: { ...editedData[id], [field]: value } });
// };

// const handleSave = async () => {
//   try {
//     const updatedXLSXData = xlsxData.map(row => {
//       if (editedData[row.Id]) {
//         return { ...row, ...editedData[row.Id] };
//       }
//       return row;
//     });
//     setXLSXData(updatedXLSXData);
//     // Write the updated data to the XLSX file
//     await writeXLSXFile(updatedXLSXData);
//     Alert.alert('Success', 'Data saved successfully');
//   } catch (error) {
//     console.error('Error saving data:', error);
//     Alert.alert('Error', 'Failed to save data');
//   }
//   setEditingCell(null);
//   setEditedData({});
// };

// const writeXLSXFile = async (data) => {
//   // Write the data to XLSX file logic
// };