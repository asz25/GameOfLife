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

import PropTypes from "prop-types"


class Cell extends React.Component
{

    state = {
        isAlive: this.props.cellState,
    }

    static propTypes = {
        cellState: PropTypes.bool.isRequired,
        row: PropTypes.number.isRequired,
        column: PropTypes.number.isRequired,
    }
    
    
    componentDidMount()
    {

    }

    handlePress = () =>
    {
        if(this.state.isAlive)
        {
            this.setState({isAlive: false})
        }
        
        else
        {
            this.setState({isAlive: true})
        }
        console.log(`We made it in click press. isAlive state is now:${this.state.isAlive} `)
        
    }

    render()
    {
        return(

            <TouchableOpacity onPress = {this.handlePress}>
                {console.log(`We made it in render phase. isAlive state is now:${this.state.isAlive} `)}
                <Text style={!this.state.isAlive ? styles.isDead : styles.cell} />
            </TouchableOpacity>

        )
    }


}

const styles = StyleSheet.create({
    cell: {
        backgroundColor:"green",
        width: 100,
        marginHorizontal: 25,
        marginVertical: 35,
        fontSize: 50,
        textAlign: "center",
        
    },

    isDead: {
        backgroundColor:"red",
        width: 100,
        marginHorizontal: 25,
        marginVertical: 35,
        fontSize: 50,
        textAlign: "center",    }
})


export default Cell;