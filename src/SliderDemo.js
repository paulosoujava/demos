import React, { Component } from 'react';
import { View, StyleSheet, Text, Slider } from 'react-native';


export default class SliderDemo extends Component {
  constructor(props){
    super(props);
    this.state = {
      valor:50
    };
    
  }
  render(){
 return(
      <View style={styles.body}>
        <Slider 
        minumumTrackTintColor="#FFEE"
        maximumTrackTintColor="#000"
        value={this.state.valor} 
        minumumVale={0} 
        maximumValue={100} 
        onValueChange={ (v) => this.setState({valor:v})} />
        <Text style={styles.valor}>{this.state.valor.toFixed(0)}%</Text>
      </View>
      );
    }
}

const styles = StyleSheet.create({
  body:{
    marginTop:20,
    flex:1
  },
  valor:{
    textAlign: 'center',
    fontSize:35
  }
});





