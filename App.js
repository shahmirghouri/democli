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
  StyleSheet,
  TextInput
} from 'react-native';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      name:"",
      pass:"",
      address:"",
    }
  }

  chngeData ()
  {
    
  }
  submit()
  {
      alert("Data Submitted");
  }


  render() {
    return (
      <View>
        <TextInput placeholder="Enter Name" style={[]} 
          onChangeText={(text)=> {this.setState({name:text})}} >

        </TextInput>

        <TextInput placeholder="Enter Password" style={[]} 
          onChangeText={(text)=> {this.setState({pass:text})}} >

        </TextInput>

        <TextInput placeholder="Enter Address" style={[]} 
          onChangeText={(text)=> {this.setState({address:text})}} >

        </TextInput>

      </View>
    )
  }
}


const styles = StyleSheet.create({
  colors:{
    color:'maroon',
    backgroundColor:'lightpink'

  },
  fonts:{
    fontSize: 30,
    fontFamily:'ariel'
    
  },
   backColor:{
     backgroundColor:'#808080'
   }
})




export default App;
