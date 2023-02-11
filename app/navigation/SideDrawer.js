import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import CustomDrawer from '../components/CustomDrawer';

import Ionicons from 'react-native-vector-icons/Ionicons';

// import ProfileScreen from '../screens/ProfileScreen';
// import MessagesScreen from '../screens/MessagesScreen';
import MomentsScreen from '../screens/MomentsScreen';
// import SettingsScreen from '../screens/SettingsScreen';

import BottomTab from './BottomTab';

const Drawer = createDrawerNavigator();


const SideDrawer = () => {
  return (
    <Drawer.Navigator
      
    screenOptions={{ headerShown: false, drawerPosition: 'right',drawerStyle: { width: '80%' } }} overlayColor="transparent" drawerContent={(props) => <CustomDrawer {...props} />}>
      
      <Drawer.Screen 
        name="BottomTab"
        component={BottomTab}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="timer-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Moments"
        component={MomentsScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="timer-outline" size={22} color={color} />
          ),
        }}
      />
     
    </Drawer.Navigator>
  );
};

export default SideDrawer;