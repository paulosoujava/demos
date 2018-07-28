import React, { Component } from 'react';
import { View, StyleSheet, Text, StatusBar, Button } from 'react-native';


export default class StatusBarDemo extends Component {
  constructor(props){
    super(props);
    this.state = {
      statusStyle : "dark-content",
      bgColor: '#FFF',
      sumir : false
    };  
    this.Alterar = this.Alterar.bind(this);
    this.sumir = this.sumir.bind(this);
  }
Alterar(){
      let s = this.state;
    

    if( s.statusStyle == 'dark-content'){
      s.statusStyle = 'light-content';
      s.bgColor = '#000';
     }else{
      s.statusStyle = 'dark-content';
      s.bgColor = '#FFF';
    }

    this.setState(s);
}
sumir(){
      let s = this.state;

    if( !s.sumir ){
      s.sumir = true;
     }else{
      s.sumir = false;
    }

    this.setState(s);
}

  render(){
 return(
      <View  style={[styles.body, {backgroundColor:this.state.bgColor}]}>
    {/*"light-content " "dark-content" "default"   hidden={true} */}

      <StatusBar  barStyle={this.state.statusStyle} hidden={this.state.sumir} />
       <Button title="Alterar StatusBar" onPress={this.Alterar} />
       <Button title="sumir  StatusBar" onPress={this.sumir} />
        
      </View>
      );
    }
}

const styles = StyleSheet.create({
  body:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});















