import React, { useState } from 'react'
import { Image, KeyboardAvoidingView, TouchableOpacity, StyleSheet, View, Text, FlatList, Systrace } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { Formik } from 'formik';
import * as yup from 'yup';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//Components
import Screen from '../components/Screen'
import InputIcon from '../components/InputIcon';
import AppButton from '../components/AppButton';


//config
import Colors from '../config/Colors'
import { FontFamily } from '../config/font';


export default function SearchScreen(props) {
const[menuid,setmenuid]=useState(1)

  const gridList = [
    {
        id: '1',
        imageSource: require('../../assets/images/greenphone.png'),

    },
    {
      id: '2',
      imageSource: require('../../assets/images/redlaptop.png'),

      },
      {
        id: '3',
        imageSource: require('../../assets/images/orangewatch.png'),    

    },
    {
        id: '4',
        imageSource: require('../../assets/images/blueairpod.png'),    

    },
    ]
const categoryList = [
          {
              id: 1,
              title: 'Videos',
        
          },
          {
              id: 2,
              title: 'Photo',
        
        },
          {
              id: 3,
              title: 'Status',
        
          },
          {
              id: 4,
              title: 'Review',
        
          },
          {
            id: 5,
            title: 'poll',
        
        },
        ]
console.log(menuid)
  return (
    <Screen style={styles.screen}>
      <View style={styles.topi}/>

      {/* search */}
         <InputIcon imageSource={require('../../assets/images/searchicon.png')} title='Search Videos, Creators or Products'/>

         {/* category */}
         <View  style={styles.horizocategory}>
         {categoryList.map((item,i) =>(
         <TouchableOpacity activeOpacity={0.7} onPress={()=>setmenuid(item.id)} key={i} style={{width:'20%',justifyContent:'center'}}>
          <View style={{width:'100%',alignItems:'center',justifyContent:'center'}}>
           <Text style={{color:menuid===item.id?Colors.third:Colors.black,fontSize:RFPercentage(2),
                       fontWeight:'600',fontFamily:FontFamily.medium}}>
               {item.title}
           </Text>
           </View>
           <View style={{width:'100%',height:RFPercentage(0.4),backgroundColor:menuid===item.id?Colors.third:Colors.lightWhite,
                        marginTop:RFPercentage(1),borderRadius:RFPercentage(1)}}></View>
         </TouchableOpacity>
        
        ))}
        </View>           

{/* 4 tab */}
         <FlatList
                   scrollEnabled={false}
                   contentContainerStyle={{justifyContent:'center'}}
                   style={{marginTop: RFPercentage(8),flexGrow:0}}
                   data={gridList}
                   keyExtractor={gridList=> gridList.id.toString()}
                   showsVerticalScrollIndicator={false}
                   vertical
                   numColumns={2}
                   renderItem={({ item }) => 
                   
                   
                     <TouchableOpacity activeOpacity={0.7} 
                        style={styles.fourboxmain}  >
                               <Image
                                style={styles.fourboxflatimg}
                                source={item.imageSource} />
                      </TouchableOpacity>
                  }/>

{/* unfollow */}
                  <View  style={styles.unfomaincon}>
                         
                           <Image
                                style={styles.unfoimg}
                                source={require('../../assets/images/pinkairpod.png')} />
                                
                                <View style={styles.unfotextcon}>
                                <View style={{}}>
                                  <Text style={styles.appletext}>
                                      Apple Airpods 3G
                                  </Text>
                                  <Text style={styles.mem}>
                                         229K Members
                                  </Text>
                                </View>

                                <TouchableOpacity activeOpacity={0.7} style={styles.unfomain}>
                                    <Text style={styles.unfotext}>
                                         + unfollow
                                  </Text>
                                </TouchableOpacity>
                                </View>
                  </View>

                   {/* button */}
            <TouchableOpacity  style={styles.notifybutton} activeOpacity={0.7} 
                                        onPress={() => { props.navigation.navigate('NotificationSetting')}} >
                    <AppButton title='Notification Seeting' />
                </TouchableOpacity>
      </Screen>
  )
}

const styles = StyleSheet.create({
  screen:{ flex: 1, justifyContent: 'flex-start',
    alignItems:'center',backgroundColor: Colors.white },
    
    //category
    horizocategory:{flexDirection:'row',width:'100%',marginTop:RFPercentage(3)},

    //fourboxflatlist
    fourboxmain:{alignItems:'center',justifyContent:'center',margin:RFPercentage(0.7),borderRadius:RFPercentage(1),overflow:'hidden'},
    fourboxflatimg:{
      width: RFPercentage(23),
      height: RFPercentage(12),
  },

    // unfoloow
    unfomaincon:{
      width: '80%',
      height: RFPercentage(10),
      backgroundColor: Colors.white,
      borderWidth:RFPercentage(0.1),
      borderColor:Colors.lightWhite,
      color: Colors.black,
      borderRadius: RFPercentage(1.5),
      flexDirection:'row',
      marginTop:RFPercentage(5)
    },
    unfoimg:{
      width: RFPercentage(11),
      height: RFPercentage(10),
  },
    unfotextcon:{width:'75%',flexDirection:'row',justifyContent:'space-between',alignItems:'center',padding:RFPercentage(1.3)},
    mem:{fontSize:RFPercentage(1.8),fontWeight:'400',Colors:Colors.grey,marginTop:RFPercentage(1.3),fontFamily:FontFamily.regular},
    appletext:{fontSize:RFPercentage(1.9),fontWeight:'600',Colors:Colors.black,fontFamily:FontFamily.semiBold},
    unfomain:{alignItems:'center',justifyContent:'center',width:RFPercentage(11.5),
    height:RFPercentage(4),borderRadius:RFPercentage(1),borderWidth:RFPercentage(0.1),borderColor:Colors.lightWhite},
    topi:{marginTop:RFPercentage(2)},
    unfotext:{fontSize:RFPercentage(1.7),fontWeight:'400',color:Colors.third,fontFamily:FontFamily.regular},
    
    // button
    notifybutton:{width:'100%',justifyContent:'center',alignItems:'center',marginTop:RFPercentage(5)},
})