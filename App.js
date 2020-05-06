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
  Button,
} from 'react-native';

import Cell from './Cell.js';

const TESTBOARD = [[false,false,false,false,false],
[false,false,false,false,false],
[false,true,true,true,false],
[false,false,false,false,false],
[false,false,false,false,false]]

const ROWS = 5;
const COLUMNS = 5;

// function renderCell()
// {
//   return(
    
//   )
// }








class App extends React.Component
{
  state = {
    board: [[false,false,false,false,false],
            [false,false,true,false,false],
            [false,true,false,true,false],
            [false,false,true,false,false],
            [false,false,false,false,false]],

    board1: [[false,false,false,false,false],
            [false,false,false,false,false],
            [false,true,true,true,false],
            [false,false,false,false,false],
            [false,false,false,false,false]],
  }

  componentDidMount()
  {

  }

checkDirection = (board, cellRow, cellColumn, direction) =>
{
  if(direction === "up" && cellRow-1>=0 && board[cellRow-1][cellColumn] )
        {
            return 1;
        }

        else if(direction === "down" && cellRow+1<=ROWS-1 && board[cellRow+1][cellColumn])
        {
            return 1;
        }

        else if(direction === "left" && cellColumn-1>=0 && board[cellRow][cellColumn-1])
        {
            return 1;
        }

        else if(direction === "leftUp" && cellColumn-1>=0 && cellRow-1>=0 && board[cellRow-1][cellColumn-1])
        {
            return 1;
        }

        else if(direction === "leftDown" && cellColumn-1>=0 && cellRow+1<=ROWS-1 && board[cellRow+1][cellColumn-1])
        {
            return 1;
        }

        else if(direction === "right" && cellColumn+1<=COLUMNS-1 && board[cellRow][cellColumn+1])
        {
            return 1;
        }

        else if(direction === "rightUp" && cellColumn+1<=COLUMNS-1 && cellRow-1>=0  && board[cellRow-1][cellColumn+1])
        {
            return 1;
        }

        else if(direction === "rightDown" && cellColumn+1<=COLUMNS-1 && cellRow+1<=ROWS-1 && board[cellRow+1][cellColumn+1])
        {
            return 1;
        }

        else
        {
            return 0;
        }
}

checkCell = (board, cellRow, cellColumn) =>
{
          //Calling the helper method for each direction and adding it will tell us if the cell will live or die
          var result = 0;
          var neighborCount=0;
          directions = ["up","down","left","right","leftUp","leftDown","rightUp","rightDown"];
  
          for (let direction of directions)
          {
              neighborCount += this.checkDirection(board,cellRow,cellColumn,direction);
  //            System.out.println(direction+", neighborCount: "+neighborCount);
  
          }
  
          if(neighborCount==1 || neighborCount==0)
              {result =  1;}
          else if(neighborCount > 3)
              {result =  2;}
          else if(neighborCount == 3)
              {result = 3;}
          else if (neighborCount == 2)
              {result = 4;}
  
          return result;
}

  generation = (board) =>
  {
    var tempBoard = JSON.parse(JSON.stringify(board))
    var resultingBoard = JSON.parse(JSON.stringify(board))

    for (let row = 0; row < ROWS ; row++) {
        for (let  column = 0; column < COLUMNS; column++) {
            let behavior = this.checkCell(tempBoard,row,column);

            if(behavior==1 || behavior==2)
            {
              resultingBoard[row][column] = false;
            }

            else if(behavior == 3)
            {
              resultingBoard[row][column] = true;
            }

            else if(behavior == 4)
            {
                continue;
            }

            else
            {
                System.out.println("Something went wrong, Row: "+row+", Column: "+column+", Behavior: "+behavior);
            }

        }
  }

  this.setState( {board1: resultingBoard})
 
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
          {this.state.board1.map((currentRow, index) => {
            
            var row = index;
            return <FlatList
            data={currentRow}
            renderItem = { ({item,index}) => <Cell row={row} column = {index} cellState = {item} board={this.state.board1}/>}
            numColumns = {5}
            keyExtractor={(item, index) => (index.toString())}/>
          })}


        </View>
        <Text>We went past it dood</Text>
        <Button title="Cycle" color= "blue" onPress={() => this.generation(this.state.board1)} />

        {/* {() => this.generation(this.state.board1)}  */}

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
