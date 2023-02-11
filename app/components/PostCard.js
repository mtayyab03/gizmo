import React, { useState } from 'react'
import { Image, TouchableOpacity, StyleSheet, View,  } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import Ionicons from 'react-native-vector-icons/Ionicons';

//Components
import LikeSavepost from '../components/LikeSavepost';
import ProfileData from '../components/ProfileData';


//config
import Colors from '../config/Colors'
export default function PostCard({children,style,image,title,subtitle,likes,dislikes,add}) {
  return (
    <View style={[{width:'90%',backgroundColor:Colors.purewhite,
                     borderRadius:RFPercentage(1),alignItems:'center'},style]}>
                <ProfileData image={image} title={title} subtitle={subtitle}/>
                 
                 {/* line */}
                 <View style={{width:'100%',height:RFPercentage(0.1),backgroundColor:Colors.white}}/>

                           {children}
                {/* line */}
                <View style={{width:'100%',height:RFPercentage(0.1),backgroundColor:Colors.white}}/>

                  {/* bottom like save unlike */}
                  <View style={{width:'90%',height:RFPercentage(11),flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                      <LikeSavepost likes={likes} dislikes={dislikes} add={add}/>
                  </View>
            </View>

  )
}