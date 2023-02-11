import React, { useState } from 'react'
import { Image, TouchableOpacity, StyleSheet, View, Text,FlatList,ScrollView,ImageBackground } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';

//screens

//Components
import PostCard from '../components/PostCard';
import Screen from '../components/Screen'
import CardSwiper from '../components/CardSwiper';
import ImageSelectPoint from '../components/ImageSelectPoint';

//config
import Colors from '../config/Colors'
import { FontFamily } from '../config/font';

export default function HomeScreen({navigation}) {
  const[menuid,setmenuid]=useState(1)
    
    const categoryList = [
        {
            id: 1,
            title: 'All',
    
        },
        {
            id: 2,
            title: 'Videos',
    
      },
        {
            id: 3,
            title: 'Reviews',
    
        },
        {
            id: 4,
            title: 'Posts',
    
        },
    ]

  return (
    <Screen style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center',backgroundColor: Colors.white }}>
         <ScrollView contentContainerStyle={{alignItems:'center'}} showsVerticalScrollIndicator={false} style={{width:'100%'}}>
        
        {/* header */}
        <View style={{width:'90%',alignItems:'center',flexDirection:'row',marginTop:RFPercentage(3),justifyContent:'space-between'}}>
            <View style={{alignItems:'center',justifyContent:'center',width:RFPercentage(6),height:RFPercentage(6),
                           borderRadius:RFPercentage(4),backgroundColor:Colors.purewhite}}>
            <Ionicons
                    name="md-grid-outline"
                    size={25}
                    color={Colors.third}
                  />
            </View>
            <View style={{alignItems:'center',justifyContent:'center'}}>
            <Image
                  style={{
                      width: RFPercentage(17),
                      height: RFPercentage(4),
                  }}
                  source={require('../../assets/images/gizmologoorange.png')} />
            </View>
            <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.openDrawer()} style={{alignItems:'center',justifyContent:'center'}}>
            <Image
                  style={{
                      width: RFPercentage(7),
                      height: RFPercentage(7),
                  }}
                  source={require('../../assets/images/person1.png')} />
            </TouchableOpacity>

        </View>

        {/* flatlist categories */}
       
        <FlatList
               scrollEnabled={false}
               contentContainerStyle={{width: '90%',justifyContent:'space-between'}}
                style={{marginTop: RFPercentage(5),flexGrow:0}}
                data={categoryList}
                keyExtractor={categoryList => categoryList.id.toString()}
                showsHorizontalScrollIndicator={false}
                horizontal
                renderItem={({ item }) =>
                 <View style={{flexDirection:'row',alignItems:'center'}}>
                    
                     <TouchableOpacity activeOpacity={0.7} onPress={()=>setmenuid(item.id)}
                                style={{alignItems:'center',justifyContent:'center',paddingHorizontal:RFPercentage(1.9),height:RFPercentage(6.2),
                                      borderRadius:RFPercentage(3),backgroundColor:menuid===item.id?Colors.third:Colors.white,borderColor:Colors.third,
                                     borderWidth:RFPercentage(0.3)}}>
                        <Text style={{fontSize:RFPercentage(2.5),fontFamily:FontFamily.regular,fontWeight:'500',color:menuid===item.id?Colors.white:Colors.third}}>
                            {item.title}
                        </Text>
                     </TouchableOpacity>
                 </View>
           } />

       {/* card  */}
        
       <PostCard style={{marginTop:RFPercentage(3)}} image={require('../../assets/images/person2.png') }
                          title='Darrell Steward' subtitle='48K Followers • 1 week ago '
                          likes='51k' dislikes='265' add='165'>


                <View style={{width:'100%', height: RFPercentage(40),marginBottom:RFPercentage(10)}}>
                  <Image style={{ width:'100%', height: RFPercentage(50) }} source={require('../../assets/images/whiteblackapple.png')} />
                </View>
                   <View style={{width:'90%',marginTop:RFPercentage(2),marginBottom:RFPercentage(2)}}>
                      <Text style={{fontSize:RFPercentage(2.3),fontWeight:'600',color:Colors.black,fontFamily:'Poppins_500Medium'}}> 
                           iPhone 13 Pro Unboxing & First Look - The Fresh iPhone Experience
                      </Text>
                </View>

               </PostCard>

            {/* 2nd card */}
            <PostCard style={{marginTop:RFPercentage(2)}} image={require('../../assets/images/person5.png') }
                          title='Kristin Watson' subtitle='30K Followers • 7 hours ago '
                          likes='51k' dislikes='265' add='165'>

                       <View style={{width:'100%', height: RFPercentage(30)}}>
       
                       {/* image */}
                         <ImageBackground style={{ width:'100%', height: RFPercentage(30) }} source={require('../../assets/images/bluephone.png')} >
                              <View style={{width:RFPercentage(8),height:RFPercentage(4),flexDirection:'row',marginLeft:RFPercentage(1),marginTop:RFPercentage(1),opacity:0.4,
                                          borderRadius:RFPercentage(1),backgroundColor:Colors.black,alignItems:'center',justifyContent:'center'}}>
                                  <Image style={{ width:RFPercentage(2), height: RFPercentage(2) }} source={require('../../assets/images/eyeicon.png')} />
                                  <Text style={{fontSize:RFPercentage(1.5),fontWeight:'600',color:Colors.white,marginLeft:RFPercentage(0.5)}}> 
                                     2.6M
                                   </Text>
                              </View>
                         </ImageBackground>
                       </View>
                          <View style={{width:'90%',marginTop:RFPercentage(2),marginBottom:RFPercentage(2)}}>
                             <Text style={{fontSize:RFPercentage(2.3),fontWeight:'600',color:Colors.black ,fontFamily:'Poppins_500Medium'}}> 
                                     iPhone 13 Pro Unboxing & First Look - The Fresh iPhone Experience 
                             </Text>
                       </View>

                </PostCard>
            {/* Swiper horizontal */}
                <CardSwiper/>

        {/* text Card Post */} 
           <PostCard image={require('../../assets/images/person3.png') }
                          title='Marvin McKinney' subtitle='50K Followers • 2 day ago'
                          likes='51k' dislikes='265' add='165'>

                <View style={{width:'90%',marginTop:RFPercentage(2),marginBottom:RFPercentage(2)}}>
                      <Text style={{fontSize:RFPercentage(2.3),fontFamily:FontFamily.regular,fontWeight:'400',color:Colors.black,lineHeight:RFPercentage(3.4)}}> 
                         Overall not a ton of design innovation that’s for sure. No folding screens , 
                         no blazing fast charging, etc. But a lot of refinement stuff for pro iPhone again,
                          and a world class chip. Overall not a ton of design. 
                           <Text style={{fontSize:RFPercentage(2.3),fontWeight:'600',color:Colors.third,fontFamily:FontFamily.regular}}>#iphone14pro</Text> 
                      </Text>
                </View>

            </PostCard>

          {/* 4th card */}
            <PostCard style={{marginTop:RFPercentage(2)}} image={require('../../assets/images/person4.png') }
                          title='Floyd Miles' subtitle='30K Followers • 7 hours ago'
                          likes='51k' dislikes='265' add='165'>

                       <View style={{width:'100%', height: RFPercentage(50)}}>
       
                       {/* image */}
                         <ImageBackground style={{ width:'100%', height: RFPercentage(50) }} source={require('../../assets/images/laptopgradients.png')} >
                              <View style={{width:RFPercentage(8),height:RFPercentage(4),flexDirection:'row',marginLeft:RFPercentage(1),marginTop:RFPercentage(1),opacity:0.4,
                                          borderRadius:RFPercentage(1),backgroundColor:Colors.black,alignItems:'center',justifyContent:'center'}}>
                                  <Image style={{ width:RFPercentage(2), height: RFPercentage(2) }} source={require('../../assets/images/eyeicon.png')} />
                                  <Text style={{fontSize:RFPercentage(1.5),fontWeight:'600',color:Colors.white,marginLeft:RFPercentage(0.5)}}> 
                                     2.6M
                                   </Text>
                              </View>
                         </ImageBackground>
                       </View>
                          <View style={{width:'90%',marginTop:RFPercentage(2),marginBottom:RFPercentage(2)}}>
                             <Text style={{fontSize:RFPercentage(2.3),fontWeight:'600',color:Colors.black,fontFamily:FontFamily.medium}}> 
                             MacBook Air (M2 2022) Review: is it the Best Air Yet? <Text style={{fontSize:RFPercentage(2.3),fontWeight:'600',color:Colors.third}}>#macbookairm2</Text> 
                             </Text>
                         </View>

                </PostCard>

             {/* last Card */}
             <PostCard style={{marginTop:RFPercentage(2)}} image={require('../../assets/images/person5.png') }
                          title='Wade Warren' subtitle='50K Followers • 2 day ago'
                          likes='51k' dislikes='265' add='165'>

                  <View style={{width:'90%',marginTop:RFPercentage(2),marginBottom:RFPercentage(2)}}>
                      <Text style={{fontSize:RFPercentage(2.3),fontWeight:'600',color:Colors.black,lineHeight:RFPercentage(3),fontFamily:FontFamily.medium}}> 
                          Which one of the Smart phone has best Battery and Processor?
                      </Text>

                      {/* choices */}
                      <View style={{flexDirection:'row',width:'100%',alignItems:'center',justifyContent:'space-between',marginTop:RFPercentage(2)}}>
                         <View style={{width:RFPercentage(6),height:RFPercentage(6),borderRadius:RFPercentage(1)}}>
                              <Image style={{ width:RFPercentage(6), height: RFPercentage(6) }} source={require('../../assets/images/phone1.png')} />
                         </View>
                         <LinearGradient  colors={[ '#F53F04','#FEAD0A',]} start={[1, 1]} end={[0.2, 1]} 
                           style={{width:'80%',height:RFPercentage(6),alignItems:'center',justifyContent:'space-between',flexDirection:'row',
                                      borderWidth:RFPercentage(0.1),borderColor:Colors.white,borderRadius:RFPercentage(1),paddingHorizontal:RFPercentage(1.5)}}>
                             
                                <View>
                               <Text style={{fontSize:RFPercentage(2),fontWeight:'400',color:Colors.white,lineHeight:RFPercentage(3),fontFamily:FontFamily.regular}}> 
                                     Iphone 13 pro
                                </Text>
                                </View>
                                <View>
                                <Text style={{fontSize:RFPercentage(2),fontWeight:'400',color:Colors.white,lineHeight:RFPercentage(3),fontFamily:FontFamily.regular}}> 
                                     16%
                                </Text>
                                
                             </View>
                         </LinearGradient>
                      </View>

                      <ImageSelectPoint image={require('../../assets/images/phone2.png') }
                          title='Samsung Galaxy S21 FE ' subtitle='16%'/>

                     <ImageSelectPoint image={require('../../assets/images/phone3.png') }
                          title='OnePlus 10 Pro' subtitle='16%'/>
 
                      <ImageSelectPoint image={require('../../assets/images/phone4.png') }
                          title='Google Pixel 6 ' subtitle='16%'/>
                     
                     <Text style={{fontSize:RFPercentage(2),fontWeight:'500',color:Colors.black,marginTop:RFPercentage(2),fontFamily:FontFamily.medium}}> 
                            526K votes
                    </Text>
                </View>

            </PostCard>

     </ScrollView>
    </Screen>
  )
}