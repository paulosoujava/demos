import React, { Component } from 'react';
import { View, StyleSheet, Text, Switch } from 'react-native';


export default class SwitchDemo extends Component {
  constructor(props){
    super(props);
    this.state = {
      valor : false
    }
  }
  render(){
 return(
      <View style={styles.body}>
       <Switch
          thumbTintColor="#000"
          onTintColor="#EF0"
          value={this.state.valor} 
          onValueChange={(v)=> this.setState( { valor : v } ) }/>

       <Text> {this.state.valor? 'ON' : 'OFF'}</Text>
      </View>
      );
    }
}

const styles = StyleSheet.create({
  body:{
    marginTop:120,
    flex:1,
    alignItems: 'center'
  }
});

