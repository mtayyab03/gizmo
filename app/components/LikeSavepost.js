import React, { useState } from 'react'
import { Image, TouchableOpacity, StyleSheet, View, Text,FlatList,ScrollView } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


//config
import Colors from '../config/Colors'
import { FontFamily } from '../config/font';

export default function LikeSavepost({likes,dislikes,add}) {
    const [savePost, setSavePost] = useState(false);
    const [like, setLike] = useState(true);
  return (
    <>
           <View style={styles.mainleft}>
                  <View style={styles.slignt}>
                    <TouchableOpacity activeOpacity={0.7} onPress={() => { setLike(true)}}>
                    <Foundation
                    name="like"
                    size={35}
                    color={like==false?Colors.grey:Colors.third}
                  />
                  </TouchableOpacity>
                  <Text style={styles.likdis}>{likes}</Text>
                    </View>
                    <View style={styles.slignt}>
                <TouchableOpacity activeOpacity={0.7} onPress={() => { setLike(false)}}>
                    <Foundation
                    name="dislike"
                    size={35}
                    color={like==true?Colors.grey:Colors.third}
                  />
                  </TouchableOpacity>
                  <Text style={styles.likdis}>{dislikes}</Text>
                    </View>
                    <View style={styles.slignt}>
                  <Image style={styles.addshricon} source={require('../../assets/images/addposticon.png')} />
                    <Text style={styles.addshrtext}>{add}</Text>
                </View>
                <View style={styles.slignt}>
                  <Image style={styles.addshricon} source={require('../../assets/images/shareicon.png')} />
                    <Text style={styles.addshrtext}>share</Text>
                </View>
                    </View>

                    {/* saveicon */}
                 <View style={styles.mainright}>
                  { savePost==true?<TouchableOpacity activeOpacity={0.7} onPress={() => { setSavePost(false)}}>
                    <MaterialCommunityIcons
                    name="bookmark"
                    size={35}
                    color={Colors.third}
                  />
                  </TouchableOpacity>
                  :
                    <TouchableOpacity activeOpacity={0.7} onPress={() => { setSavePost(true)}}>
                    <MaterialCommunityIcons
                    name="bookmark-outline"
                    size={35}
                    color={Colors.grey}
                  />
                  
                  </TouchableOpacity>}
                  <Text style={styles.savetext}>Save</Text>
                    </View>
    </>
  )
}

const styles = StyleSheet.create({
   mainleft:{flexDirection:'row',alignItems:'center',width:'60%',justifyContent:'space-between'},
   slignt:{alignItems:'center',justifyContent:'center'},
   likdis:{fontSize:RFPercentage(1.5),fontWeight:'600',color:Colors.black,fontFamily:FontFamily.semiBold},
   addshricon:{ width:RFPercentage(4), height: RFPercentage(4) },
   addshrtext:{fontSize:RFPercentage(1.5),fontWeight:'600',color:Colors.black,marginTop:RFPercentage(0.5),fontFamily:FontFamily.semiBold},

   //save
   mainright:{width:'40%',alignItems:'flex-end',justifyContent:'center'},
   savetext:{fontSize:RFPercentage(1.5),fontWeight:'600',color:Colors.black,fontFamily:FontFamily.semiBold,
   marginRight:RFPercentage(0.5),marginTop:RFPercentage(0.5)},


})