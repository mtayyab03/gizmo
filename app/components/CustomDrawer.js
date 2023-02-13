import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
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
    <View style={styles.screen}>
      
           <View style={styles.headermain}>
           <TouchableOpacity activeOpacity={0.7} 
                   style={styles.iconcircle}>
                  <Image
                   style={styles.headericon}
                   source={require('../../assets/images/cancelIcon.png')} />
               </TouchableOpacity>

               <Text style={styles.headertext}>
                  My Profile
               </Text>
        </View>

        {/* //profile */}
        <View style={styles.profilemain}>
                      <View style={styles.innermaincon}>
                       
                      <Image
                  style={styles.profimg}
                  source={require('../../assets/images/person5.png')} />
                  
                 
             <View style={styles.proftextmaincon}>
                <View style={styles.darltextmain}>
                  <Text style={styles.darltext}>
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
                  <Text style={styles.mktext}>
                      @mkbhd
                  </Text>
                <View style={styles.vptextmain}>
                  <Text style={styles.vptext}>
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
        <View style={styles.categorybuttonmain}>
             <TouchableOpacity activeOpacity={0.7} onPress={() => setButtonClick(true)} 
                   style={{width:RFPercentage(13),height:RFPercentage(6),borderRadius:RFPercentage(5),
                       backgroundColor:buttonClick==true?Colors.third:Colors.white,alignItems:'center',justifyContent:'center',
                        borderWidth:RFPercentage(0.3),borderColor:Colors.third}}>
                <Text style={{fontWeight:'400',fontFamily:'Poppins_500Medium',color:buttonClick==true?Colors.white:Colors.third,}}>
                        Activity
                  </Text>
             </TouchableOpacity>
             <TouchableOpacity activeOpacity={0.7} onPress={() => setButtonClick(false)} 
             style={{width:RFPercentage(13),height:RFPercentage(6),borderRadius:RFPercentage(5),
                       backgroundColor:buttonClick==false?Colors.third:Colors.white,alignItems:'center',justifyContent:'center',
                         borderWidth:RFPercentage(0.3),borderColor:Colors.third,marginLeft:RFPercentage(1)}}>
                <Text style={{fontWeight:'400',fontFamily:'Poppins_500Medium',color:buttonClick==false?Colors.lightWhite:Colors.third}}>
                        Accounts
                  </Text>
             </TouchableOpacity>
        </View>

        {/* Activity list */}
        <View style={styles.activlistmain}>
          {/* Watch History */}
            <View style={styles.watchlistmain}>
              <View style={styles.rowline}>
              <TouchableOpacity activeOpacity={0.7} 
                 style={styles.circleiconlist}>
                    <Image
                     style={{
                         width: RFPercentage(2.5),
                         height: RFPercentage(2.5),
                     }}
                     source={require('../../assets/images/historyicon.png')} />
                 </TouchableOpacity>
                  <Text style={styles.listtext}>
                        Watch History
                  </Text>
                  
            </View>
            <View style={styles.arrowicon}>
                  <MaterialIcons
                    name="keyboard-arrow-right"
                    size={32}
                    color={ Colors.third}
                  />
              </View>
              </View>

              {/* Liked */}
              <View style={styles.listmain}>
              <View style={styles.rowline}>
              <TouchableOpacity activeOpacity={0.7} 
                 style={styles.circleiconlist}>
                    <AntDesign
                    name="like2"
                    size={21}
                    color={ Colors.third}
                  />
                 </TouchableOpacity>
                  <Text style={styles.listtext}>
                        Liked
                  </Text>
                  
            </View>
            <View style={styles.arrowicon}>
                  <MaterialIcons
                    name="keyboard-arrow-right"
                    size={32}
                    color={ Colors.third}
                  />
              </View>
           </View>

            {/* Saved */}
            <View style={styles.listmain}>
              <View style={styles.rowline}>
              <TouchableOpacity activeOpacity={0.7} 
                 style={styles.circleiconlist}>
                    <MaterialCommunityIcons
                    name="bookmark-outline"
                    size={21}
                    color={ Colors.third}
                  />
                 </TouchableOpacity>
                  <Text style={styles.listtext}>
                        Saved
                  </Text>
                  
            </View>
            <View style={styles.arrowicon}>
                  <MaterialIcons
                    name="keyboard-arrow-right"
                    size={32}
                    color={ Colors.third}
                  />
              </View>
           </View>
           
        </View>

{/* bottom button */}
      <View style={styles.mainbutton}>
        <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
          <View  style={styles.buttoncon}>
            
            <Text
              style={styles.buttontextmain}>
              Log Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({

  screen:{flex: 1,alignItems:'center'},

  //header
  headermain:{width:'90%',flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop: RFPercentage(6)},
  iconcircle:{ position:'absolute',left:0 ,alignItems:'center',
  justifyContent:'center',width:RFPercentage(5.5),height:RFPercentage(5.5),
  borderRadius:RFPercentage(4),backgroundColor:Colors.white},
  headericon:{
    width: RFPercentage(3.5),
    height: RFPercentage(3.5),
},
  headertext:{fontWeight:'600',fontSize:RFPercentage(2.5), color:Colors.black,fontFamily:FontFamily.semiBold},

  //profile
  profilemain:{width:'90%',height:RFPercentage(14),borderWidth:RFPercentage(0.1),
         marginTop:RFPercentage(5),alignItems:'center',justifyContent:'center',
         borderColor:Colors.lightWhite,borderRadius:RFPercentage(2),padding:RFPercentage(1.5)},
  innermaincon:{flexDirection:'row',alignItems:'center',justifyContent:'space-between'},
  profimg:{
    width: RFPercentage(10),
    height: RFPercentage(10),
   },
   proftextmaincon:{marginLeft:RFPercentage(2.1)},
   darltextmain:{flexDirection:'row',justifyContent:'center',alignItems:'center'},
   darltext:{fontWeight:'600',fontFamily:'Poppins_600SemiBold',fontSize:RFPercentage(2)},
   mktext:{fontWeight:'400',fontSize:RFPercentage(1.7),marginTop:RFPercentage(0.4),fontFamily:FontFamily.regular},
   vptextmain:{flexDirection:'row',marginTop:RFPercentage(0.4),alignItems:'center'},
   vptext:{fontWeight:'400',fontFamily:'Poppins_500Medium',color:Colors.third},

  // category button
  categorybuttonmain:{backgroundColor: '#fff', paddingTop: 20,width:'90%',flexDirection:'row'},

  // list
  activlistmain:{width:'90%',paddingTop: 25,justifyContent:'center'},
  watchlistmain:{flexDirection:'row',alignItems:'center',justifyContent:'space-between'},
  listmain:{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:RFPercentage(3)},
  rowline:{flexDirection:'row',marginTop:RFPercentage(0.7),alignItems:'center'},
  circleiconlist:{alignItems:'center',
  justifyContent:'center',width:RFPercentage(4.7),height:RFPercentage(4.7),
  borderRadius:RFPercentage(4),backgroundColor:Colors.white},
  listtext:{fontSize:RFPercentage(2.2),fontWeight:'400',fontFamily:'Poppins_500Medium',color:Colors.black,marginLeft:RFPercentage(2)},
  arrowicon:{alignItems:'center',justifyContent:'center',marginTop:RFPercentage(0.3)},


  //button
  mainbutton:{width: '90%',position:'absolute',bottom:RFPercentage(2)},
  buttoncon:{ width: '100%', height: RFPercentage(6), borderRadius: RFPercentage(1), 
             alignItems: 'center', justifyContent: 'center', marginTop: RFPercentage(2)
             ,backgroundColor:Colors.third},
  buttontextmain:{
     fontSize: 15,
     color:Colors.white,
     fontFamily:'Poppins_600SemiBold',
},
})