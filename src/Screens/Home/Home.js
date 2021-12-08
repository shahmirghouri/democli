import React from 'react'
import { View, Text, Button, TouchableOpacity, TouchableHighlight, Image } from 'react-native'
import navigationString from '../../constants/navigationString'
import styles from './styles'
import ConstButton from '../../asset/button'
import { hide } from 'yargs'

export default function Home({navigation}) {
    
    return (
        <View style={styles.container}>
         
        
         <TouchableOpacity style={styles.skip_btn} onPress={()=> navigation.navigate(navigationString.CHAT)}>

            <Text style={styles.btnTxt}>Chatroom</Text>
        
        </TouchableOpacity>
        
        </View>
    )
}