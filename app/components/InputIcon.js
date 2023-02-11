import React, { useState } from 'react'
import { Image, TouchableOpacity, StyleSheet, View, Text, TextInput,FlatList } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'

//config
import Colors from '../config/Colors'
import { FontFamily } from '../config/font';

export default function InputIcon({title,imageSource}) {
    const [link, onChangeLink] = useState('');
  
  return (
    <View style={{ width:'90%',backgroundColor: Colors.lightWhite,padding:RFPercentage(1),
        borderRadius: RFPercentage(5), height:RFPercentage(6), justifyContent:'center',marginTop:RFPercentage(2) }}>

        <View style={{ flexDirection: 'row', alignItems: 'center',marginLeft:RFPercentage(2)  }}>        

         <Image style={{ width: RFPercentage(3), height: RFPercentage(3), }}
          source={imageSource} />        

         <TextInput
                style={{width:'100%',paddingLeft:RFPercentage(1.5),
                        fontSize:RFPercentage(1.7),color:Colors.black,fontFamily:FontFamily.regular}}
                 onChangeText={onChangeLink}
                 value={link}
                 placeholder={title}
                 placeholderTextColor={'#616C87'}
             /> 
 
       </View>

  </View>
  )
}