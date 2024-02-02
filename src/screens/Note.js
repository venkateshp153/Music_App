// import React, { useState } from 'react';
// import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
// import { BASE_URL } from '../../env';
// import axios from 'axios';
// function Note() {
  

//   const fetchData = async () => {
//     try {
//       const response = await axios.get(`${BASE_URL}/getall`);
//       // Assuming your response data is structured similar to { success: boolean, data: object }
//       const { data } = response.data;
//       // Handle the fetched data, maybe update state or do something else with it
//       console.log('Fetched data:', data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };
  
  

//   return (
//     <View style={styles.container}>
//       <TouchableOpacity
//         style={styles.button}
//         onPress={fetchData}
//         activeOpacity={0.8}>
//         <Text style={styles.buttonText}>Press Me</Text>
//       </TouchableOpacity>

      
      

//     </View>
//   );
// }

// export default Note;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   button: {
//     backgroundColor: 'orange',
//     width: 100,
//     height: 40,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderRadius: 8,
//     marginBottom: 20,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//   },
//   text: {
//     fontSize: 18,
//     marginVertical: 5,
//   },
// });
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Note = () => {
  return (
    <View>
      <Text>Note</Text>
    </View>
  )
}

export default Note

const styles = StyleSheet.create({})