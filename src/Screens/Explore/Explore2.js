import React from 'react'
import { View, Text, Button , Image} from 'react-native'
import navigationString from '../../constants/navigationString'
import ConstButton from '../../asset/button'
import styles from './styles'

export default function Explore2({navigation}) {
    
    return (
        <View style={styles.container}>
         
         <Image source={require('../../asset/loader2.gif')} style={{ width: 400, height: 350 }}/>
        {/*  <Button title="next" onPress={()=> navigation.navigate(navigationString.HOME)}></Button> */}
         <ConstButton text="Next" onPress={()=> navigation.navigate(navigationString.SIGNIN)}/>
        </View>
    )
}