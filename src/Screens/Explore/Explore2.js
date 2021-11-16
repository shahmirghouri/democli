import React from 'react'
import { View, Text, Button } from 'react-native'
import navigationString from '../../constants/navigationString'
import ConstButton from '../../asset/button'
import styles from './styles'

export default function Explore2({navigation}) {
    
    return (
        <View style={styles.container}>
         
        
        {/*  <Button title="next" onPress={()=> navigation.navigate(navigationString.HOME)}></Button> */}
         <ConstButton text="Next" onPress={()=> navigation.navigate(navigationString.HOME)}/>
        </View>
    )
}