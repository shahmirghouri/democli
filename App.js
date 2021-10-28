/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
//import type {Node} from 'react';
import Login from './components/Login'
import {
  Button,
  Text,
  View,
} from 'react-native';

class App extends React.Component {
  render()
  {
    return(
        <View>
          <Text style={{fontSize:30}}>Welcome to MEGAHERTZ..</Text>
          <Button title="Login"  onPress={() => alert("hello world")}></Button>
        </View>

    )
  }
}


export default App;
