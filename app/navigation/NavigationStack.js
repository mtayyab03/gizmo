import React  from 'react';
import { StyleSheet, View, Text } from 'react-native'

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


//screens
import SplashScreen from '../screens/SplashScreen';
import NotificationSetting from '../screens/NotificationSetting';
import PersonalInformationScreen from '../screens/PersonalInformationScreen';
import ModalsScreen from '../screens/ModalsScreen';
import LoginScreen from '../screens/LoginScreen';
import OTPScreen from '../screens/OTPScreen';

//navigation
import BottomTab from '..//navigation/BottomTab';
import SideDrawer from './SideDrawer';

//config
import Colors from '../config/Colors'


const Stack = createStackNavigator();

export default function NavigationStack() {
  return (
    <Stack.Navigator screenOptions={{headerMode:"false"}} initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="SideDrawer" component={SideDrawer} />
        <Stack.Screen name="NotificationSetting" component={NotificationSetting} />
        <Stack.Screen name="PersonalInformationScreen" component={PersonalInformationScreen} />
        <Stack.Screen name="ModalsScreen" component={ModalsScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="OTPScreen" component={OTPScreen} />
      </Stack.Navigator>
  )
}