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

class App extends React.Component {
  constructor()
  {
    super();
    this.state = {
      data: " some data"
    }
  }

  data_fun()
  {
    this.setState({data:"New DATA.. TY"})
  }
  render()
  {
    return(
      <View>
        <Text>Hello MEGAHERTZ..</Text>
        <Text style={{fontSize:25}}>{this.state.data}</Text>
        <Button title="Update State" onPress={() => {this.data_fun()}}></Button>

      </View>
    )
  }
}


export default App;
