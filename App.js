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

const TESTBOARD = [[false,false,true,false,true],
[false,false,false,false,false],
[false,false,false,false,false],
[false,false,false,false,false],
[false,false,false,false,false]]

// function renderCell()
// {
//   return(
    
//   )
// }

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

        <Text>We are right before it dood</Text>
        <View>
          {this.state.board.map((currentRow, index) => {
            
            var row = index;
            return <FlatList
            data={currentRow}
            renderItem = { ({item,index}) => <Cell row={row} column = {index} cellState = {item} />}
            numColumns = {5}
            keyExtractor={(item, index) => index.toString()}/>
          })}
        </View>
        <Text>We went past it dood</Text>

          
      </View>
    )
  }
}
 

const styles = StyleSheet.create({
  
  grid : {
    flex: 1,
    flexDirection: 'column', 
    margin: 1, 

  },
  
  
});

export default App;
