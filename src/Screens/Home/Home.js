import React from 'react'
import { View, Text, Button, TouchableOpacity, TouchableHighlight, Image, SafeAreaView, TextInput } from 'react-native'
import navigationString from '../../constants/navigationString'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles'
import ConstButton from '../../asset/button'
import { hide } from 'yargs'
import { color } from 'react-native-elements/dist/helpers';

export default function Home({navigation}) {
    
    return (
       <SafeAreaView style={styles.container}>

        <View >
         
            <Text style={{fontSize:24, fontWeight:"bold", }}>Welcome to</Text>
            <Text style={{fontSize:36, fontWeight:"bold", color:'#6902FC'}}>Megahertz</Text>
            
            <View style={{
              // centring Tab Button...
              position:'absolute',

              top: 50,
              right:10,
              
            
            }} >
            <TouchableOpacity onPress={()=> navigation.navigate(navigationString.HOME)}> 
                <MaterialCommunityIcons
                    name="bell-outline"
                    size={25}
                
                ></MaterialCommunityIcons>
              </TouchableOpacity>

            </View>
           
            <View style={styles.searchContainer}>
                    <MaterialCommunityIcons
                    name="magnify"
                    size={25}
                
                ></MaterialCommunityIcons>
                <TextInput placeholder="Search"></TextInput>
            </View>


        </View>
       </SafeAreaView>
    )
}