/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Home from './components/Home';
//import type {Node} from 'react';
import Login from './components/Login'
import {
  Button,
  Text,
  View,
} from 'react-native';

const App = () =>{
  const data =" shahmir ghouri"
    return(
        <View>
          <Home data={data}/>
        </View>

    )
  }



export default App;
