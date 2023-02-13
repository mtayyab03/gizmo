import React, { useState } from 'react'
import { Image, TouchableOpacity, StyleSheet, View, Text,FlatList,Switch,ImageBackground } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'
import AppButton from '../components/AppButton';

//Components
import HeaderMode from '../components/HeaderMode';
import InputField from '../components/InputField';
import Screen from '../components/Screen'

//config
import Colors from '../config/Colors'

export default function PersonalInformationScreen(props) {
    const informationList = [
        {
            id: '1',
            title: 'Enter Name',
    
        },
        {
            id: '2',
            title: 'Enter Email',
    
      },
        {
            id: '3',
            title: 'Mobile Number',
    
        },
        {
            id: '4',
            title: 'Gender',
    
        },
        {
            id: '5',
            title: 'Date of birth',
    
        },
       
    ]
  return (
    <Screen style={styles.screen}>

        {/* headerComponent */}
        <View style={styles.headermain}>
            <HeaderMode  title='Personal information'/>
        </View>

       {/* InputFields */}
       <FlatList
                scrollEnabled={false}
                style={styles.flatstylinput}
                data={informationList}
                keyExtractor={informationList => informationList.id.toString()}
                showsVerticalScrollIndicator={false}
                vertical
                renderItem={({ item }) =>
                <View style={styles.inputmain}>
                    <InputField placeholder={item.title}/>
                </View>
             } />
            <TouchableOpacity activeOpacity={0.7} onPress={() => { props.navigation.navigate('ModalsScreen')}}
                        style={styles.buttonedit}>
               <AppButton title='Edit'/>
             </TouchableOpacity>
        </Screen>
  )
}

const styles = StyleSheet.create({
    screen:{ flex: 1, justifyContent: 'flex-start',
      alignItems:'center',backgroundColor: Colors.white },
      
      //inputfield
      inputmain:{marginTop:RFPercentage(2),alignItems:'center',justifyContent:'center'},
      flatstylinput:{width: '100%', marginTop: RFPercentage(5),flexGrow:0},

      //header
      headermain:{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'center',marginTop: RFPercentage(4)},

      //button
      buttonedit:{width:'100%',justifyContent:'center',alignItems:'center',position:'absolute',bottom:RFPercentage(4)},
})