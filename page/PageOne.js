import React, { Component } from 'react';
import { View,  Text, Button, TextInput, Image } from 'react-native';

 import  { DrawerActions } from 'react-navigation';


export default class TelaInicial extends Component{

  constructor(props){
    super(props);

    this.state = {nome : ''}

    this.chat = this.chat.bind(this);
  }



static navigationOptions = ({navigation}) =>({
  // title : 'HOME'
  
  // tabBarLabel : "Home",
  // tabBarIcon: (tintColor, focused) => {
  //  if(focused)
  //    return(<Image source={require('../image/icon1.png')} style={{width: 26, height:26}} />);
  //  else
  //    return(<Image source={require('../image/icon2.png')} style={{width: 26, height:26}} />);
 
  // }
  drawerLabel:"Page Two",
  drawerIcon: (tintColor, focused) => {
      if(focused)
      return(<Image source={require('../image/icon1.png')} style={{width: 20, height:20}} />);
    else
      return(<Image source={require('../image/icon2.png')} style={{width: 20, height:20}} />);
 
   }
});

  chat(){
      this.props.navigation.navigate('PageTwo', {nome: this.state.nome});
  }

  render(){
      return(
          <View style={{marginTop:30, alignItems:'center'}}  >
          <Text>HELLO NAVIGATOR</Text>
          <TextInput placeholder="Seu nome" onChangeText={(nome) =>this.setState({nome})}
           style={{height:40, borderColor:'#000', width:300, borderWidth:1}} />
          }
         {/* <Button title="Conversar" onPress={this.chat}  />*/}

         <Button title="Ope Drawer" onPress={()=> this.props.navigation.dispatch(DrawerActions.openDrawer()) }  />
          </View>
        );
  }
}