import * as React from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Test from './android/Test';
import Test2 from './android/Test2';


const Stack = createNativeStackNavigator();
const App = () => {
  
  return (
  //   <NavigationContainer>
  //   <Stack.Navigator>
  //     <Stack.Screen
  //       name="Home"
  //       component={HomeScreen}
  //       options={{title: 'Welcome'}}
  //     />
     
  //   </Stack.Navigator>
  // </NavigationContainer>
  <Test2/>

  );
};

export default App;