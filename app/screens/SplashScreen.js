import React from 'react'
import { View, StyleSheet ,Image, TouchableOpacity} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { RFPercentage } from 'react-native-responsive-fontsize';

//config
import Colors from '../config/Colors'

export default function SplashScreen(props) {
  return (
    
    <LinearGradient style={styles.background} 
                    colors={[Colors.primary, Colors.secondary]} start={[2, 1]} end={[0.2, 1.5]}>
      <TouchableOpacity activeOpacity={0.7} onPress={() => { props.navigation.navigate('LoginScreen')}}>
      <Image
             style={styles.logo}
             source={require('../../assets/images/gizmologo.png')} />
             </TouchableOpacity>
      </LinearGradient>
      
  )
}

const styles = StyleSheet.create({
  background:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },

  logo:{
    width: RFPercentage(30),
    height: RFPercentage(7),
  }
});