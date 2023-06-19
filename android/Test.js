// // import React, { useEffect } from 'react';
// // import { View, Text } from 'react-native';
// // import RNFS from 'react-native-fs';

// // const Test = () => {
// //   useEffect(() => {
// //     fetchData();
// //   }, []);

// //   const fetchData = async () => {
// //     try {
// //       // Fetch data from the API
// //       const response = await fetch('https://dummyjson.com/todos');
// //       const data = await response.json();

// //       // Store the data in a text file
// //       await storeData(data);

// //       // Retrieve the stored data
// //       const storedData = await retrieveData();
// //       console.log('Retrieved data:', storedData);

// //       // Update the data and store it again
// //       const updatedData = [...storedData, { id: 4, name: 'New Item' }];
// //       await storeData(updatedData);

// //       // Retrieve the updated data
// //       const updatedStoredData = await retrieveData();
// //       console.log('Updated data:', updatedStoredData);

// //       // Delete the stored data
// //       await deleteData();
// //       console.log('Data deleted successfully!');
// //     } catch (error) {
// //       console.log('Error:', error);
// //     }
// //   };

// //   const storeData = async (data) => {
// //     try {
// //       const filePath = `${RNFS.DocumentDirectoryPath}/apiData.txt`;

// //       // Convert the data to string format
// //       const dataString = JSON.stringify(data);

// //       // Write the data to the file
// //       await RNFS.writeFile(filePath, dataString, 'utf8');

// //       console.log('Data stored successfully!');
// //     } catch (error) {
// //       console.log('Error:', error);
// //     }
// //   };

// //   const retrieveData = async () => {
// //     try {
// //       const filePath = `${RNFS.DocumentDirectoryPath}/apiData.txt`;

// //       // Read the data from the file
// //       const dataString = await RNFS.readFile(filePath, 'utf8');

// //       // Parse the data from string format
// //       const data = JSON.parse(dataString);

// //       return data;
// //     } catch (error) {
// //       console.log('Error:', error);
// //       return [];
// //     }
// //   };

// //   const deleteData = async () => {
// //     try {
// //       const filePath = `${RNFS.DocumentDirectoryPath}/apiData.txt`;

// //       // Delete the file
// //       await RNFS.unlink(filePath);

// //       console.log('Data deleted successfully!');
// //     } catch (error) {
// //       console.log('Error:', error);
// //     }
// //   };

// //   return (
// //     <View>
// //       <Text>Storing CRUD API data in a text file</Text>
// //     </View>
// //   );
// // };

// // export default Test;

// // import React, { useEffect, useState } from 'react';
// // import { View, Text, Button } from 'react-native';
// // import RNFS from 'react-native-fs';
// // import Share from 'react-native-share';

// // const Test = () => {
// //     const [todo, setTodos] = useState([]);
// //   useEffect(() => {
// //     fetchData();
// //   }, []);

// //   const fetchData = async () => {
// //     try {
// //       const response = await fetch('https://dummyjson.com/products');
// //       const data = await response.json();
// //       setTodos(data);
// //       const filePath = `${RNFS.DocumentDirectoryPath}/apiData.txt`;
// //       const dataString = JSON.stringify(data);

// //       await RNFS.writeFile(filePath, dataString, 'utf8');

// //       console.log('Data stored successfully!');
// //     } catch (error) {
// //       console.log('Error:', error);
// //     }
// //   };

// //   const downloadFile = async () => {
// //     try {
// //       const filePath = `${RNFS.DocumentDirectoryPath}/apiData.txt`;

// //       const options = {
// //         type: 'text/plain',
// //         url: `file://${filePath}`,
// //       };

// //       await Share.open(options);
// //     } catch (error) {
// //       console.log('Error:', error);
// //     }
// //   };

// //   return (
// //     <View>
// //       <Text>Storing API data in a text file</Text>
// //       <Button title="Download" onPress={downloadFile} />
// //       {todo.map((item) => (
// //         <Text key={item.id} style={styles.item}>
// //           {item.id}
// //         </Text>
// //       ))}
// //     </View>
// //   );
// // };

// // export default Test;

// // import React, { useEffect, useState } from 'react';
// // import { FlatList, Text, View } from 'react-native';

// // export default App = () => {
// //   const [isLoading, setLoading] = useState(true);
// //   const [data, setData] = useState([]);
// //   console.log(data);

// //   useEffect(() => {
// //     // fetch('https://raw.githubusercontent.com/adhithiravi/React-Hooks-Examples/master/testAPI.json')
// //     //   .then((response) => response.json())
// //     //   .then((json) => setData(json)
      
// //     //   )
// //     //   .catch((error) => console.error(error))
// //     //   .finally(() => setLoading(false));
// //     fetchData();
// //   }, []);
// //   const fetchData = async () => {
// //     try {
// //       const response = await fetch('https://raw.githubusercontent.com/adhithiravi/React-Hooks-Examples/master/testAPI.json');
// //       const dataTodo = await response.json();
// //       setData(dataTodo);
// //       console.log("data",data)
// //     } catch (error) {
// //       console.error('Error fetching data:', error);
// //     }
// //   };
// //   return (
// //     <View >
// //     {data.map((person) => {
// //       return (
// //         <View>
// //           <Text>{person.id}</Text>
// //         </View>
// //       );
// //     })}
// //   </View>
// //     // <View style={{ flex: 1, padding: 24 }}>
// //     //   {isLoading ? <Text>Loading...</Text> : 
// //     //   ( <View style={{ flex: 1, flexDirection: 'column', justifyContent:  'space-between'}}>
// //     //       <Text style={{ fontSize: 18, color: 'green', textAlign: 'center'}}>{data.title}</Text>
// //     //       <Text style={{ fontSize: 14, color: 'green', textAlign: 'center', paddingBottom: 10}}>Articles:</Text>
// //     //       <FlatList
// //     //         data={data.articles}
// //     //         keyExtractor={({ id }, index) => id}
// //     //         renderItem={({ item }) => (
// //     //           <Text>{item.id + '. ' + item.title}</Text>
// //     //         )}
// //     //       />
// //     //     </View>
// //     //   )}
// //     // </View>
// //   );
// // };

// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const API_URL = 'https://raw.githubusercontent.com/adhithiravi/React-Hooks-Examples/master/testAPI.json';

// const Test = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch(API_URL);
//       const responseData = await response.json();
//       setData(responseData);
//       console.log(data)
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {data.map((item) => (
//         <Text  style={styles.item}>
//           {item.title}
//         </Text>
//       ))}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   item: {
//     fontSize: 18,
//     marginBottom: 10,
//   },
// });

// export default Test;
