import React, { useState } from 'react'
import { Image, TouchableOpacity, StyleSheet, View, Text,FlatList,ScrollView } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import Ionicons from 'react-native-vector-icons/Ionicons';

//config
import Colors from '../config/Colors'
import { FontFamily } from '../config/font';

export default function ProfileData({image,title,subtitle}) {
  return (
    <View style={styles.profiledatamain}>
                  <View style={styles.innermain}>

                    {/* picture */}
                    <View style={styles.imgmain}>
                        <Image style={styles.imgcircle} source={image} />
                    </View>

                    {/* text */}
                    <View >
                        <Text style={styles.boldtext}>
                               {title}
                        </Text>
                        <Text style={styles.lighttext}>
                               {subtitle}
                        </Text>
                    </View>

                  </View>

                  {/* //editicon */}
                <TouchableOpacity activeOpacity={0.7} onPress={() => { props.navigation.navigate('EditProfile') }} 
                       style={styles.editiconmain}>
               
                <Image style={styles.editicon} source={require('../../assets/images/3dot.png')} />

                </TouchableOpacity>
            </View>
  )
}

const styles = StyleSheet.create({
  profiledatamain:{ width: '95%', marginTop: RFPercentage(1),flexDirection: 'row', alignItems: 'center'  },
  innermain:{ flexDirection: 'row', alignItems: 'center',width:'80%' },
  imgmain:{ width: RFPercentage(10), height: RFPercentage(10),alignItems:'center',justifyContent:'center',
  borderRadius: RFPercentage(5), overflow: 'hidden' },
  imgcircle:{ width: RFPercentage(7), height: RFPercentage(7), },
  boldtext:{ fontWeight: '600', fontSize: RFPercentage(2), color: Colors.black,fontFamily:FontFamily.semiBold },
  lighttext:{ fontWeight: '300', fontSize: RFPercentage(1.8), color: Colors.grey,marginTop:RFPercentage(0.6),fontFamily:FontFamily.regular },
  editiconmain:{alignItems: 'flex-end',width:'20%'},
  editicon:{ width: RFPercentage(6), height: RFPercentage(6), },
})