import React, { useState } from 'react'
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { RFPercentage } from 'react-native-responsive-fontsize'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



//config
import Colors from '../config/Colors'
import { FontFamily } from '../config/font';

const CustomDrawer = (props) => {
  const[buttonClick,setButtonClick]=useState(true)
  return (
    <View style={{flex: 1,alignItems:'center'}}>
      
           <View style={{width:'90%',flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop: RFPercentage(6)}}>
           <TouchableOpacity activeOpacity={0.7} 
          style={{ position:'absolute',left:0 ,alignItems:'center',
                  justifyContent:'center',width:RFPercentage(5.5),height:RFPercentage(5.5),
                  borderRadius:RFPercentage(4),backgroundColor:Colors.white}}>
         <Image
          style={{
              width: RFPercentage(3.5),
              height: RFPercentage(3.5),
          }}
          source={require('../../assets/images/cancelIcon.png')} />
      </TouchableOpacity>

      <Text style={{fontWeight:'600',fontSize:RFPercentage(2.5), color:Colors.black,fontFamily:FontFamily.semiBold}}>
         My Profile
      </Text>
        </View>
        <View style={{width:'90%',height:RFPercentage(14),borderWidth:RFPercentage(0.1),marginTop:RFPercentage(5),alignItems:'center',justifyContent:'center',
                     borderColor:Colors.lightWhite,borderRadius:RFPercentage(2),padding:RFPercentage(1.5)}}>
                      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                       
                      <Image
                  style={{
                      width: RFPercentage(10),
                      height: RFPercentage(10),
                  }}
                  source={require('../../assets/images/person5.png')} />
                  
                  <View style={{marginLeft:RFPercentage(2.1)}}>
                  <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                  <Text style={{fontWeight:'600',fontFamily:'Poppins_600SemiBold',fontSize:RFPercentage(2)}}>
                        Darlene Robertson
                  </Text>
                  <View style={{marginLeft:RFPercentage(1)}}>
                  <Ionicons
                    name="checkmark-circle"
                    size={20}
                    color={ Colors.green}
                  />
                  </View>
                  </View>
                  <Text style={{fontWeight:'400',fontSize:RFPercentage(1.7),marginTop:RFPercentage(0.4),fontFamily:FontFamily.regular}}>
                      @mkbhd
                  </Text>
                  <View style={{flexDirection:'row',marginTop:RFPercentage(0.4),alignItems:'center'}}>
                  <Text style={{fontWeight:'400',fontFamily:'Poppins_500Medium',color:Colors.third}}>
                        View Profile
                  </Text>
                  <View style={{marginLeft:RFPercentage(0.1)}}>
                  <MaterialIcons
                    name="keyboard-arrow-right"
                    size={23}
                    color={ Colors.third}
                  />
                  </View>
                  </View>
                  </View>
                 </View>
            
        </View>
        <View style={{backgroundColor: '#fff', paddingTop: 20,width:'90%',flexDirection:'row'}}>
             <TouchableOpacity activeOpacity={0.7} onPress={() => setButtonClick(true)} style={{width:RFPercentage(13),height:RFPercentage(6),borderRadius:RFPercentage(5),
                       backgroundColor:buttonClick==true?Colors.third:Colors.white,alignItems:'center',justifyContent:'center',
                        borderWidth:RFPercentage(0.3),borderColor:Colors.third}}>
                <Text style={{fontWeight:'400',fontFamily:'Poppins_500Medium',color:buttonClick==true?Colors.white:Colors.third,}}>
                        Activity
                  </Text>
             </TouchableOpacity>
             <TouchableOpacity activeOpacity={0.7} onPress={() => setButtonClick(false)} style={{width:RFPercentage(13),height:RFPercentage(6),borderRadius:RFPercentage(5),
                       backgroundColor:buttonClick==false?Colors.third:Colors.white,alignItems:'center',justifyContent:'center',
                         borderWidth:RFPercentage(0.3),borderColor:Colors.third,marginLeft:RFPercentage(1)}}>
                <Text style={{fontWeight:'400',fontFamily:'Poppins_500Medium',color:buttonClick==false?Colors.lightWhite:Colors.third}}>
                        Accounts
                  </Text>
             </TouchableOpacity>
        </View>

        {/* Activity list */}
        <View style={{width:'90%',paddingTop: 25,justifyContent:'center'}}>
          {/* Watch History */}
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
              <View style={{flexDirection:'row',marginTop:RFPercentage(0.7),alignItems:'center'}}>
              <TouchableOpacity activeOpacity={0.7} 
                 style={{alignItems:'center',
                  justifyContent:'center',width:RFPercentage(4.7),height:RFPercentage(4.7),
                  borderRadius:RFPercentage(4),backgroundColor:Colors.white}}>
                    <Image
                     style={{
                         width: RFPercentage(2.5),
                         height: RFPercentage(2.5),
                     }}
                     source={require('../../assets/images/historyicon.png')} />
                 </TouchableOpacity>
                  <Text style={{fontSize:RFPercentage(2.2),fontWeight:'400',fontFamily:'Poppins_500Medium',color:Colors.black,marginLeft:RFPercentage(2)}}>
                        Watch History
                  </Text>
                  
            </View>
            <View style={{alignItems:'center',justifyContent:'center',marginTop:RFPercentage(0.3)}}>
                  <MaterialIcons
                    name="keyboard-arrow-right"
                    size={32}
                    color={ Colors.third}
                  />
              </View>
              </View>

              {/* Liked */}
              <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:RFPercentage(3)}}>
              <View style={{flexDirection:'row',marginTop:RFPercentage(0.7),alignItems:'center'}}>
              <TouchableOpacity activeOpacity={0.7} 
                 style={{alignItems:'center',
                  justifyContent:'center',width:RFPercentage(4.7),height:RFPercentage(4.7),
                  borderRadius:RFPercentage(4),backgroundColor:Colors.white}}>
                    <AntDesign
                    name="like2"
                    size={21}
                    color={ Colors.third}
                  />
                 </TouchableOpacity>
                  <Text style={{fontSize:RFPercentage(2.2),fontWeight:'400',fontFamily:'Poppins_500Medium',color:Colors.black,marginLeft:RFPercentage(2)}}>
                        Liked
                  </Text>
                  
            </View>
            <View style={{alignItems:'center',justifyContent:'center',marginTop:RFPercentage(0.3)}}>
                  <MaterialIcons
                    name="keyboard-arrow-right"
                    size={32}
                    color={ Colors.third}
                  />
              </View>
           </View>

            {/* Saved */}
            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:RFPercentage(3)}}>
              <View style={{flexDirection:'row',marginTop:RFPercentage(0.7),alignItems:'center'}}>
              <TouchableOpacity activeOpacity={0.7} 
                 style={{alignItems:'center',
                  justifyContent:'center',width:RFPercentage(4.7),height:RFPercentage(4.7),
                  borderRadius:RFPercentage(4),backgroundColor:Colors.white}}>
                    <MaterialCommunityIcons
                    name="bookmark-outline"
                    size={21}
                    color={ Colors.third}
                  />
                 </TouchableOpacity>
                  <Text style={{fontSize:RFPercentage(2.2),fontWeight:'400',fontFamily:'Poppins_500Medium',color:Colors.black,marginLeft:RFPercentage(2)}}>
                        Saved
                  </Text>
                  
            </View>
            <View style={{alignItems:'center',justifyContent:'center',marginTop:RFPercentage(0.3)}}>
                  <MaterialIcons
                    name="keyboard-arrow-right"
                    size={32}
                    color={ Colors.third}
                  />
              </View>
           </View>
           
        </View>
{/* bottom button       */}
      <View style={{width: '90%',position:'absolute',bottom:RFPercentage(2)}}>
        <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
          <View  style={{ width: '100%', height: RFPercentage(6), borderRadius: RFPercentage(1), 
              alignItems: 'center', justifyContent: 'center', marginTop: RFPercentage(2)
            ,backgroundColor:Colors.third}}>
            
            <Text
              style={{
                fontSize: 15,
                color:Colors.white,
                fontFamily:'Poppins_600SemiBold',
              }}>
              Log Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;