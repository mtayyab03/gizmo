import React, { useState } from 'react'
import { Image, TouchableOpacity, StyleSheet, View, Text,FlatList,ScrollView,ImageBackground } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import OTPInputView from '@twotalltotems/react-native-otp-input';

//config
import Colors from '../config/Colors'

//Components
import Screen from '../components/Screen'
import AppButton from '../components/AppButton';


export default function OTPScreen({navigation}) {
  return (
    <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center',backgroundColor: Colors.white }}>
    <OTPInputView
    style={{width: '70%', height: 200,marginTop:RFPercentage(20)}}
    pinCount={4}
    autoFocusOnLoad
    codeInputFieldStyle={styles.underlineStyleBase}
    codeInputHighlightStyle={styles.underlineStyleHighLighted}
    onCodeFilled = {(code) => {
        console.log(`Code is ${code}, you are good to go!`)
    }}
/>
                
              {/* button */}
            <TouchableOpacity  style={{width:'100%',justifyContent:'center',alignItems:'center',marginTop:RFPercentage(5)}} activeOpacity={0.7} 
                                        onPress={() => {navigation.navigate('SideDrawer', { screen: 'BottomTab',params: { screen: 'HomeScreen'} })}} >
                    <AppButton title='Confirm' />
                </TouchableOpacity>
</Screen>
  )
}

const styles = StyleSheet.create({
    borderStyleBase: {
      width: 30,
      height: 45
    },
  
    borderStyleHighLighted: {
      borderColor: "#03DAC6",
    },
  
    underlineStyleBase: {
      width: 45,
      height: 45,
      backgroundColor:Colors.third,
      borderRadius:RFPercentage(1)
    },
  
    underlineStyleHighLighted: {
      borderColor: Colors.third,
    },
  });