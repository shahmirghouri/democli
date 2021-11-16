
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import navigationString from '../constants/navigationString'

import {Home, Profile, Explore1, Explore2} from '../Screens';


const Stack = createNativeStackNavigator();

function Routes(){
    return(
        <NavigationContainer>
        <Stack.Navigator>

            <Stack.Screen name={navigationString.EXPLORE1} component={Explore1} /> 
            <Stack.Screen name={navigationString.EXPLORE2} component={Explore2} />
            <Stack.Screen name={navigationString.HOME} component={Home} />
            <Stack.Screen name={navigationString.PROFILE} component={Profile} />
            
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default Routes;