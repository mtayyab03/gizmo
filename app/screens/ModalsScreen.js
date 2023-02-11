import React, { useState } from 'react'
import { Image, TouchableOpacity, StyleSheet, View, Text,FlatList,Switch,Modal} from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import AppButton from '../components/AppButton';
import Ionicons from 'react-native-vector-icons/Ionicons';

//Components
import Screen from '../components/Screen'
import AppModal from '../components/AppModal';
import DoubleButton from '../components/DoubleButton';
import IconTitle from '../components/IconTitle';

//config
import Colors from '../config/Colors'
import { FontFamily } from '../config/font';

export default function ModalsScreen() {
    const [modalVisible, setModalVisible] = useState(false);
    const [secmodalVisible, setSecModalVisible] = useState(false);
    const [thirdmodalVisible, setThirdModalVisible] = useState(false);
    const [fourthmodalVisible, setFourthModalVisible] = useState(false);


  return (
<Screen style={{ flex: 1, justifyContent:'center', alignItems: 'center',backgroundColor: Colors.white }}>

    <TouchableOpacity activeOpacity={0.7}  onPress={() => setModalVisible(true)}>
      <Text style={{fontWeight:'600',fontSize:RFPercentage(2),fontFamily:FontFamily.semiBold}}>Password Update Modal </Text>
    </TouchableOpacity>
    <TouchableOpacity activeOpacity={0.7} style={{marginTop:RFPercentage(4)}} onPress={() => setSecModalVisible(true)}>
      <Text style={{fontWeight:'600',fontSize:RFPercentage(2),fontFamily:FontFamily.semiBold}}>Skip SignUp Modal</Text>
    </TouchableOpacity>
    <TouchableOpacity activeOpacity={0.7} style={{marginTop:RFPercentage(4)}} onPress={() => setThirdModalVisible(true)}>
      <Text style={{fontWeight:'600',fontSize:RFPercentage(2),fontFamily:FontFamily.semiBold}}>Gizmo Notification Modal</Text>
    </TouchableOpacity>
    <TouchableOpacity activeOpacity={0.7} style={{marginTop:RFPercentage(4)}} onPress={() => setFourthModalVisible(true)}>
      <Text style={{fontWeight:'600',fontSize:RFPercentage(2),fontFamily:FontFamily.semiBold}}>Three dot Modal</Text>
    </TouchableOpacity>

{/* category creation Modal */}

  <AppModal modalVisible={modalVisible} setModalVisible={setModalVisible} style={{justifyContent:'center'}}>
                <Ionicons
                    name="checkmark-circle"
                    size={100}
                    color={ Colors.green}
                  />
                  <View style={{alignItems:'center',justifyContent:'center',marginTop:RFPercentage(1)}}>
                    <Text style={{ color: Colors.black, fontSize: RFPercentage(2.5), fontWeight:'700',fontFamily:FontFamily.semiBold }}>
                           Password Updated
                     </Text>
                    <View style={{marginTop:RFPercentage(5),alignContent:'center',justifyContent:'center'}}>
                     <Text style={{ color: Colors.grey, fontSize: RFPercentage(2), fontWeight:'500',textAlign:'center',
                                   lineHeight:RFPercentage(3),fontFamily:FontFamily.regular }}>
                            Your Password has been updated
                                   successfully.
                     </Text>
                     </View>
                </View>

                   {/* button */} 
           <TouchableOpacity activeOpacity={0.7} onPress={() => setModalVisible(!modalVisible)} 
                     style={{ marginBottom:RFPercentage(2),marginTop:RFPercentage(3)}}>
                    <View style={{ width: RFPercentage(35), height: RFPercentage(6),
                             borderRadius: RFPercentage(1), alignItems: 'center', justifyContent: 'center',
                             backgroundColor:Colors.third}}>
                        <Text style={{ color: Colors.white, fontSize: RFPercentage(2.2), fontWeight:'700',fontFamily:FontFamily.semiBold }}>
                            Continue
                        </Text>
                     </View>
            </TouchableOpacity>

     </AppModal>

     {/* 2nd modal */}
     <AppModal modalVisible={secmodalVisible} setModalVisible={setSecModalVisible} style={{justifyContent:'center'}} >
                <Ionicons
                    name="alert-circle"
                    size={100}
                    color={ Colors.red}
                  />
                  <View style={{alignItems:'center',justifyContent:'center',marginTop:RFPercentage(1)}}>
                    <Text style={{ color: Colors.black, fontSize: RFPercentage(2.5), fontWeight:'700',fontFamily:FontFamily.semiBold }}>
                            Skip Signup
                     </Text>
                    <View style={{width:'70%',marginTop:RFPercentage(5),alignContent:'center',justifyContent:'center'}}>
                     <Text style={{ color: Colors.grey, fontSize: RFPercentage(2), fontWeight:'500',fontFamily:FontFamily.regular,
                                textAlign:'center',lineHeight:RFPercentage(3) }}>
                             Are you sure you want to
                                 skip the signup?
                     </Text>
                     </View>
                </View>

                   {/* button */} 
                   <View style={{width:'100%',marginTop:RFPercentage(3.5),marginBottom:RFPercentage(1),alignItems:'center',justifyContent:'center'}}>
                      <DoubleButton firstbutton='Sign Up' secondbutton='Skip Now' modalVisible={secmodalVisible} setModalVisible={setSecModalVisible}/>
                   </View>

     </AppModal>

      {/* 3nd modal */}
      <AppModal modalVisible={thirdmodalVisible} setModalVisible={setThirdModalVisible} style={{justifyContent:'center'}}>
                
                  <View style={{alignItems:'center',justifyContent:'center',marginTop:RFPercentage(2)}}>
                  <View style={{width:'90%',alignContent:'center',justifyContent:'center'}}>
                    <Text style={{ color: Colors.black, fontSize: RFPercentage(2.5), fontWeight:'700',textAlign:'center',lineHeight:RFPercentage(3),fontFamily:FontFamily.semiBold }}>
                           “GIZMO” would like to send
                                you notification
                     </Text>
                     </View>
                    <View style={{width:'90%',marginTop:RFPercentage(5),alignContent:'center',justifyContent:'center'}}>
                     <Text style={{ color: Colors.grey, fontSize: RFPercentage(2), fontWeight:'500',textAlign:'center',lineHeight:RFPercentage(3),fontFamily:FontFamily.regular }}>
                              Notifications may include alerts,
                               sounds, and icon badges. these can  
                                   be configured in settings.
                     </Text>
                     </View>
                </View>

                   {/* button */} 
                   <View style={{width:'100%',marginTop:RFPercentage(3.5),marginBottom:RFPercentage(1),alignItems:'center',justifyContent:'center'}}>
                      <DoubleButton firstbutton='Don’t Allow' secondbutton='Allow' modalVisible={thirdmodalVisible} setModalVisible={setThirdModalVisible}/>
                   </View>

     </AppModal>

     {/* 4th modal */}
     <AppModal modalVisible={fourthmodalVisible} setModalVisible={setFourthModalVisible} style={{justifyContent:'flex-end'}}>
                
                <TouchableOpacity activeOpacity={0.7} style={{width:RFPercentage(10),height:RFPercentage(0.5),
                    backgroundColor:Colors.third,borderRadius:RFPercentage(4),position:'absolute',top:20}} 
                     onPress={() => setFourthModalVisible(!fourthmodalVisible)}/>
                <TouchableOpacity activeOpacity={0.7} onPress={() => setFourthModalVisible(!fourthmodalVisible)} style={{width:'100%'}}>
                      <IconTitle image={require('../../assets/images/sadicon.png')} title='Not Interested'/>
                </TouchableOpacity>
                
                <TouchableOpacity activeOpacity={0.7} onPress={() => setFourthModalVisible(!fourthmodalVisible)} style={{width:'100%'}}>
                      <IconTitle image={require('../../assets/images/xpersonicon.png')} title='Unfollow Albert Flores'/>
                 </TouchableOpacity>

                <TouchableOpacity activeOpacity={0.7} onPress={() => setFourthModalVisible(!fourthmodalVisible)} style={{width:'100%'}}>
                      <IconTitle image={require('../../assets/images/reporticon.png')} title='Report'/>
                 </TouchableOpacity>
                 
   </AppModal>
      
        
    </Screen>
  )
}