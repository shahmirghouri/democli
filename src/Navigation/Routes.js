
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {Home, Profile, Explore1} from '../Screens';


const Stack = createNativeStackNavigator();

function Routes(){
    return(
        <NavigationContainer>
        <Stack.Navigator>

            <Stack.Screen name="Explore1" component={Explore1} /> 
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Profile" component={Profile} />
            
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default Routes;