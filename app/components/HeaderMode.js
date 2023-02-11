import React, { useState } from 'react'
import { Image, TouchableOpacity, StyleSheet, View, Text, TextInput, FlatList } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'


//config
import Colors from '../config/Colors'
import { FontFamily } from '../config/font';

export default function HeaderMode({title,onpress}) {
  return (
  
   <>
     <TouchableOpacity activeOpacity={0.7} onPress={onpress}
          style={{ position:'absolute',left:RFPercentage(2) ,alignItems:'center',
                  justifyContent:'center',width:RFPercentage(6),height:RFPercentage(6),
                  borderRadius:RFPercentage(4),backgroundColor:Colors.purewhite}}>
         <Image
          style={{
              width: RFPercentage(3.5),
              height: RFPercentage(3.5),
          }}
          source={require('../../assets/images/backarrowlogo.png')} />
      </TouchableOpacity>

      <Text style={{fontWeight:'600',fontSize:RFPercentage(2.5), color:Colors.black,fontFamily:FontFamily.medium}}>
         {title}
      </Text>

    </>

  )
}