import React, { Component } from 'react';
import { View, StyleSheet, TextInput,  AsyncStorage, Button } from 'react-native';


export default class MyAsyncStorage extends Component {
  constructor(props){
    super(props);
    this.state = {
    nome : ''
    };  

    AsyncStorage.getItem("MyKey").then((v)=>{
      this.setState({nome:v});
    });
    
    this.setNome = this.setNome.bind(this);
  }
  setNome(txt){
    let s = this.state;
    s.nome = txt;
    this.setState(s);
    AsyncStorage.setItem("MyKey", txt );
  }
  render(){
 return(
        <View  style={[styles.body, {backgroundColor:this.state.bgColor}]}>
          <TextInput style={styles.input} value={this.state.nome}  onChangeText={(txt)=> this.setNome(txt)} />
        </View>
      );
    }
}

const styles = StyleSheet.create({
  body:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input:{
    height: 40,
    width:300,
    backgroundColor: '#CCC',
    padding:10,
    fontSize:20,
    borderWidth:1
  }
});















