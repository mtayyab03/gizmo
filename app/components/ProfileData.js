import React, { useState } from 'react'
import { Image, TouchableOpacity, StyleSheet, View, Text,FlatList,ScrollView } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import Ionicons from 'react-native-vector-icons/Ionicons';

//config
import Colors from '../config/Colors'
import { FontFamily } from '../config/font';

export default function ProfileData({image,title,subtitle}) {
  return (
    <View style={{ width: '95%', marginTop: RFPercentage(1),flexDirection: 'row', alignItems: 'center'  }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center',width:'80%' }}>

                    {/* picture */}
                    <View style={{ width: RFPercentage(10), height: RFPercentage(10),alignItems:'center',justifyContent:'center',
                    borderRadius: RFPercentage(5), overflow: 'hidden' }}>
                        <Image style={{ width: RFPercentage(7), height: RFPercentage(7), }} source={image} />
                    </View>

                    {/* text */}
                    <View >
                        <Text style={{ fontWeight: '600', fontSize: RFPercentage(2), color: Colors.black,fontFamily:FontFamily.semiBold }}>
                               {title}
                        </Text>
                        <Text style={{ fontWeight: '300', fontSize: RFPercentage(1.8), color: Colors.grey,marginTop:RFPercentage(0.6),fontFamily:FontFamily.regular }}>
                               {subtitle}
                        </Text>
                    </View>

                  </View>

                  {/* //editicon */}
                <TouchableOpacity activeOpacity={0.7} onPress={() => { props.navigation.navigate('EditProfile') }} 
                       style={{alignItems: 'flex-end',width:'20%'}}>
               
                <Image style={{ width: RFPercentage(6), height: RFPercentage(6), }} source={require('../../assets/images/3dot.png')} />

                </TouchableOpacity>
            </View>
  )
}