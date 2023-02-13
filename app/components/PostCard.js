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
    <View style={[styles.cardmain,style]}>
                <ProfileData image={image} title={title} subtitle={subtitle}/>
                 
                 {/* line */}
                 <View style={styles.cardline}/>

                           {children}
                {/* line */}
                <View style={styles.cardline}/>

                  {/* bottom like save unlike */}
                  <View style={styles.likesavemain}>
                      <LikeSavepost likes={likes} dislikes={dislikes} add={add}/>
                  </View>
            </View>

  )
}

const styles = StyleSheet.create({
  cardmain:{width:'90%',backgroundColor:Colors.purewhite,
            borderRadius:RFPercentage(1),alignItems:'center'},

  cardline:{width:'100%',height:RFPercentage(0.1),backgroundColor:Colors.white},

  likesavemain:{width:'90%',height:RFPercentage(11),flexDirection:'row',
               alignItems:'center',justifyContent:'center'},
})