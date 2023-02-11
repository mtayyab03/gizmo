import React, { useState } from 'react'
import { Image, KeyboardAvoidingView, TouchableOpacity, StyleSheet, View, Text, FlatList, ImageBackground } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

//Components
import Screen from '../components/Screen'

//config
import Colors from '../config/Colors'

export default function NotificationScreen() {
  const[menuid,setmenuid]=useState(1)
  const cardRow = [
    {
        id: 1,
        title: 'Smart Watch',
        imageSource: require('../../assets/images/blackwatch.png'),

    },
    {
        id: 2,
        title: 'Laptop',
        imageSource: require('../../assets/images/laptopselect.png'),

  },
    {
        id: 3,
        title: 'Camera',
        imageSource: require('../../assets/images/cameraselect.png'),

    },
]
  return (
    <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center',backgroundColor: Colors.white }}>

    {/* flatlist Card selection */}
        
    <FlatList
               scrollEnabled={false}
                contentContainerStyle={{width: '95%',justifyContent:'space-between',alignItems:'center',flexDirection:'row'}}
                style={{ marginTop: RFPercentage(5),flexGrow:0}}
                data={cardRow}
                keyExtractor={cardRow => cardRow.id.toString()}
                showsHorizontalScrollIndicator={false}
                horizontal
                renderItem={({ item }) =>
                  <TouchableOpacity activeOpacity={0.9} onPress={()=>setmenuid(item.id)} 
                        style={{width:RFPercentage(16),overflow:'hidden',height:RFPercentage(21),
                              borderRadius:RFPercentage(2),borderWidth:RFPercentage(0.3),
                              borderColor:Colors.third,
                              backgroundColor:menuid===item.id?Colors.third:Colors.white,
                  }}>
                   <View>
                        <ImageBackground
                             style={{
                                 width: RFPercentage(16),
                                 height: RFPercentage(15),
                                 alignItems:'center',justifyContent:'center'
                             }}
                             source={item.imageSource}>
                              {menuid===item.id?
                                <Image
                                  style={{
                                      width: RFPercentage(3),
                                      height: RFPercentage(3),
                                  }}
                                  source={require('../../assets/images/checkmarkcircle.png')} />:null
                                }
                             </ImageBackground>
                                
                   </View>
                <View style={{alignItems:'center',justifyContent:'center',marginTop:RFPercentage(1.5)}}>
                    <Text style={{fontWeight:'600',fontFamily:'Poppins_500Medium',fontSize:RFPercentage(1.7),color:Colors.black}}>
                       {item.title}
                    </Text>
                </View>
              </TouchableOpacity>
              } />
   </Screen>
  )
}