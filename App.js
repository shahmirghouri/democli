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

  submit()
  {
      // alert("Data Submitted");
      console.warn("all values", this.state);
  }


  render() {
    return (
      <View>
        <TextInput placeholder="Enter Name" style={[styles.borders]} 
          onChangeText={(text)=> {this.setState({name:text})}} >

        </TextInput>

        <TextInput placeholder="Enter Password" style={[styles.borders] } secureTextEntry={true}
          onChangeText={(text)=> {this.setState({pass:text})}} >

        </TextInput>

        <TextInput placeholder="Enter Address" style={[styles.borders]} 
          onChangeText={(text)=> {this.setState({address:text})}} >

        </TextInput>

        <Button title="Submit" onPress={()=>{this.submit()}}></Button>
      </View>

    )
  }
}


const styles = StyleSheet.create({
  // colors:{
  //   color:'maroon',
  //   backgroundColor:'lightpink'

  // },
  // fonts:{
  //   fontSize: 30,
  //   fontFamily:'ariel'
    
  // },
  //  backColor:{
  //    backgroundColor:'#808080'
  //  },

  borders:{
    borderColor:'skyblue',
    borderWidth:2,
    padding:10,
    marginHorizontal:10,
    marginVertical:10



  }
})




export default App;
