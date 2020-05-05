/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  FlatList,
  View,
  Text,
  StatusBar,
} from 'react-native';

import Cell from './Cell.js';


class App extends React.Component
{
  state = {
    board: [[false,false,false,false,false],
            [false,false,false,false,false],
            [false,false,false,false,false],
            [false,false,false,false,false],
            [false,false,false,false,false]]
  }

  componentDidMount()
  {

  }

  render()
  {
    return(
      <View>
        <Text>Hello my dude</Text>
        <Text>{this.state.board}</Text>
        <Text>This is the javascript variable</Text>

        <Cell row={0} column = {0} cellState = {true} />
      </View>
    )
  }
}
 

const styles = StyleSheet.create({
  
  
  
});

export default App;
