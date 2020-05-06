import React from 'react';
import {
  Button,
  StyleSheet,
  ScrollView,
  FlatList,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import Cell from './Cell.js';

import PropTypes from "prop-types"

class DisplayBoard extends React.Component
{

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
        console.log(this.props)
    }

    state = {
        rows: this.props.rows,
        columns: this.props.columns,
        
    }

    static propTypes = {
        rows: PropTypes.number.isRequired,
        columns: PropTypes.number.isRequired,
        buttonPress: PropTypes.func.isRequired,
        
    }

//     checkDirection = (board, cellRow, cellColumn, direction) =>
//     {
//     if(direction === "up" && cellRow-1>=0 && board[cellRow-1][cellColumn] )
//             {
//                 return 1;
//             }

//             else if(direction === "down" && cellRow+1<=this.state.rows-1 && board[cellRow+1][cellColumn])
//             {
//                 return 1;
//             }

//             else if(direction === "left" && cellColumn-1>=0 && board[cellRow][cellColumn-1])
//             {
//                 return 1;
//             }

//             else if(direction === "leftUp" && cellColumn-1>=0 && cellRow-1>=0 && board[cellRow-1][cellColumn-1])
//             {
//                 return 1;
//             }

//             else if(direction === "leftDown" && cellColumn-1>=0 && cellRow+1<=this.state.rows-1 && board[cellRow+1][cellColumn-1])
//             {
//                 return 1;
//             }

//             else if(direction === "right" && cellColumn+1<=this.state.columns-1 && board[cellRow][cellColumn+1])
//             {
//                 return 1;
//             }

//             else if(direction === "rightUp" && cellColumn+1<=this.state.columns-1 && cellRow-1>=0  && board[cellRow-1][cellColumn+1])
//             {
//                 return 1;
//             }

//             else if(direction === "rightDown" && cellColumn+1<=this.state.columns-1 && cellRow+1<=this.state.rows-1 && board[cellRow+1][cellColumn+1])
//             {
//                 return 1;
//             }

//             else
//             {
//                 return 0;
//             }
//     }

//     checkCell = (board, cellRow, cellColumn) =>
//     {
//           //Calling the helper method for each direction and adding it will tell us if the cell will live or die
//           var result = 0;
//           var neighborCount=0;
//           directions = ["up","down","left","right","leftUp","leftDown","rightUp","rightDown"];
  
//           for (let direction of directions)
//           {
//               neighborCount += this.checkDirection(board,cellRow,cellColumn,direction);
//   //            System.out.println(direction+", neighborCount: "+neighborCount);
  
//           }
  
//           if(neighborCount==1 || neighborCount==0)
//               {result =  1;}
//           else if(neighborCount > 3)
//               {result =  2;}
//           else if(neighborCount == 3)
//               {result = 3;}
//           else if (neighborCount == 2)
//               {result = 4;}
  
//           return result;
//     }

//     generation = (board) =>
//     {
//       var tempBoard = JSON.parse(JSON.stringify(board))
//       var resultingBoard = JSON.parse(JSON.stringify(board))
  
//       for (let row = 0; row < this.state.rows ; row++) {
//           for (let  column = 0; column < this.state.columns; column++) {
//               let behavior = this.checkCell(tempBoard,row,column);
  
//               if(behavior==1 || behavior==2)
//               {
//                 resultingBoard[row][column] = false;
//               }
  
//               else if(behavior == 3)
//               {
//                 resultingBoard[row][column] = true;
//               }
  
//               else if(behavior == 4)
//               {
//                   continue;
//               }
  
//               else
//               {
//                   System.out.println("Something went wrong, Row: "+row+", Column: "+column+", Behavior: "+behavior);
//               }
  
//           }
  
//       }
    
  
//     this.setState( {board: resultingBoard})
//     console.log("Generation Cycle has finished")
  
//     }

    handleChange()
    {
        console.log("We are inside handleChange")
        this.props.buttonPress(this.props.board)
    }

    render()
    {
        return(
            <View>
            {this.props.board.map((currentRow, index) => {
              
              var row = index;
              return <FlatList
              data={currentRow}
              renderItem = { ({item,index}) => <Cell row={row} column = {index} cellState = {item} board={this.props.board}/>}
              numColumns = {5}
              keyExtractor={(item, index) => (index.toString())}/>
            })}

            <Button title="Cycle" color= "blue" onPress={this.handleChange} />

            </View>
        )
    }

}

export default DisplayBoard