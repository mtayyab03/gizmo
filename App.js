import React  from 'react';
import { StyleSheet, View, Text } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  
} from '@expo-google-fonts/poppins';

//navigation
import NavigationStack from './app/navigation/NavigationStack';



export default function App() {
  const [fontsLoaded] = useFonts({
      
    Poppins_400Regular,
    
    Poppins_500Medium,
    
    Poppins_600SemiBold,
    
    Poppins_700Bold,
   
  });

  return (
     <NavigationContainer>
       <NavigationStack/>  
     </NavigationContainer>
 
  );
}

