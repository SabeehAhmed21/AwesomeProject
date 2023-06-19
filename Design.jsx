import React, {useState} from 'react';
import {Button, Text, View, StyleSheet, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
const Design = () => {
  const [firstname,setfName] = useState(null)
  const [lastName,setlName] = useState(null)
    function setData(){
        AsyncStorage.setItem("fname","Ali");
        AsyncStorage.setItem("lname","AhmedD");
    }
   const showData = async ()=>{
    const fname = await AsyncStorage.getItem("fname");
    const lname = await AsyncStorage.getItem("lname");
    console.log("First Name:",fname);
    console.log("Last Name",lname);
    setfName(fname)
    setlName(lname)
   }
  return (
    <View>
        <Text>Async Storage  App</Text>
      <View style={styles.container}>
        <Button color="orange"  title="Set Data" onPress={setData}/>
      </View>
      <View style={styles.container}>
       
        <Button color="green" onPress={()=>showData()} title="Show Data" />
      </View>
     
      <Text>First Name: {firstname}</Text>
      <Text>Last Name: {lastName}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 18,
    margin: 20,
    fontSize:20
  },
});
export default Design;
