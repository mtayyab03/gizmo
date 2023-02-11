import React, { useState } from 'react'
import { Image, KeyboardAvoidingView, TouchableOpacity, StyleSheet, View, Text, TextInput } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { Formik } from 'formik';
import * as yup from 'yup';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//Components
import Screen from '../components/Screen'
import AppButton from '../components/AppButton';


//config
import Colors from '../config/Colors'
import { FontFamily } from '../config/font';

export default function LoginScreen(props) {
    const [eyeIcon, setEyeIcon] = useState(false);

    let validationSchema = yup.object().shape({
        email: yup.string().required().email().label('Email'),
        password: yup.string().required().min(4).label('Password'),
        })
  return (
    <Screen style={{ flex: 1, justifyContent: 'center',alignItems:'center',backgroundColor: Colors.white }}>

        

                {/* //email input */}
                <Formik
                      initialValues={{ email: '', password: '' }}
                      onSubmit={() => {props.navigation.navigate('SideDrawer', { screen: 'BottomTab',params: { screen: 'HomeScreen'} })}}
                      validationSchema={validationSchema}
                      >
                        {({handleChange,handleSubmit,errors,setFieldTouched,touched})=>(
                            
                        <>
                        <View style={{width: '100%',alignItems:'center',justifyContent:'center'}}>
                          <View style={{
                          width: '90%',
                          height: RFPercentage(7.5),
                          backgroundColor: Colors.white,
                          borderWidth:RFPercentage(0.1),
                          borderColor:Colors.lightWhite,
                          color: Colors.black,
                          paddingLeft: RFPercentage(3),
                          borderRadius: RFPercentage(1.5),
                          justifyContent: 'center'
                        }}>
                    <TextInput
                       style={{fontFamily:FontFamily.regular}}
                        keyboardType='email-address'
                        onChangeText={handleChange('email')}
                        onBlur={()=>setFieldTouched('email')}
                        // value={text}
                        placeholder='User Name or Email'
                        placeholderTextColor={Colors.placeholder}
                    />
                 </View>
                 <View style={{width:'90%'}}>
                  {touched.email && <Text style={{color:'#FF0000',fontSize:RFPercentage(1.3),marginTop:RFPercentage(0.5),fontFamily:FontFamily.regular}}>{errors.email}</Text>}
                </View>
                   
                  <View style={{
                          width: '90%',
                          height: RFPercentage(7.5),
                          backgroundColor: Colors.white,
                          borderWidth:RFPercentage(0.1),
                          borderColor:Colors.lightWhite,
                          color: Colors.black,
                          paddingLeft: RFPercentage(3),
                          borderRadius: RFPercentage(1.5),
                          justifyContent: 'center',
                          marginTop:RFPercentage(2)
                        }}>
                    <TextInput
                        style={{fontFamily:FontFamily.regular}}
                        onChangeText={handleChange('password')}
                        onBlur={()=>setFieldTouched('password')}
                        // value={Password}
                        placeholder='Password'
                        placeholderTextColor={Colors.placeholder}
                        secureTextEntry={true && !eyeIcon}
                    />
                       <TouchableOpacity activeOpacity={0.7} style={{ alignItems: 'center', justifyContent: 'center', position: "absolute", right: RFPercentage(1), width: RFPercentage(5), height: RFPercentage(5) }}>

                           <TouchableOpacity onPress={() => setEyeIcon(!eyeIcon)} style={{ position: "absolute", right: RFPercentage(1), }}>
                               <MaterialCommunityIcons
                                   color={Colors.grey}
                                   style={{ right: RFPercentage(1) }}
                                   size={RFPercentage(3)}
                                   name={eyeIcon ? "eye-outline" : "eye-off-outline"}
                               />
                           </TouchableOpacity>
                           </TouchableOpacity>


                         
                    </View>
                    <View style={{width:'90%'}}>
                  {touched.password && <Text style={{color:'#FF0000',fontSize:RFPercentage(1.3),marginTop:RFPercentage(0.5),fontFamily:FontFamily.regular}}>{errors.password}</Text>}
                  </View>
                  </View>
                
                <TouchableOpacity  style={{width:'100%',justifyContent:'center',alignItems:'center',marginTop:RFPercentage(3)}} activeOpacity={0.7} 
                                        onPress={handleSubmit} >
                    <AppButton title='LOG IN' />
                </TouchableOpacity>

                </>
                )}

                </Formik>
                
               
                   
        <View style={{width:'90%',flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:RFPercentage(7)}}>
            <View style={{width:RFPercentage(15),height:RFPercentage(8),alignItems:'center',justifyContent:'center',borderWidth:RFPercentage(0.1),
                          borderColor:Colors.lightWhite,borderRadius:RFPercentage(2)}}>
              <Image
                    style={{
                        width: RFPercentage(4),
                        height: RFPercentage(4),
                    }}
                    source={require('../../assets/images/fblogo.png')} />
            </View>
            <View style={{width:RFPercentage(15),height:RFPercentage(8),alignItems:'center',justifyContent:'center',borderWidth:RFPercentage(0.1),
                          borderColor:Colors.lightWhite,borderRadius:RFPercentage(2)}}>
              <Image
                    style={{
                        width: RFPercentage(4),
                        height: RFPercentage(4),
                    }}
                    source={require('../../assets/images/glogo.png')} />
            </View>
            <View style={{width:RFPercentage(15),height:RFPercentage(8),alignItems:'center',justifyContent:'center',borderWidth:RFPercentage(0.1),
                          borderColor:Colors.lightWhite,borderRadius:RFPercentage(2)}}>
              <Image
                    style={{
                        width: RFPercentage(3.2),
                        height: RFPercentage(4),
                    }}
                    source={require('../../assets/images/applelogo.png')} />
            </View>

        </View>
                

            

        </Screen>
  )
}