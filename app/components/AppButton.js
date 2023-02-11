import React from 'react'
import { Text,View } from 'react-native'
import { RFPercentage } from 'react-native-responsive-fontsize'

//config
import Colors from '../config/Colors'
import { FontFamily } from '../config/font';

export default function AppButton({ title }) {
    return (

        <View style={{
              width: '90%', height: RFPercentage(6)
            , borderRadius: RFPercentage(1), alignItems: 'center', justifyContent: 'center', marginTop: RFPercentage(2)
            ,backgroundColor:Colors.third}}>
            <Text style={{ color: Colors.white, fontSize: RFPercentage(2.2), fontWeight:'700',fontFamily:FontFamily.semiBold}}>
                {title}
            </Text>
        </View>

    )
}