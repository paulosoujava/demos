import React, { Component } from 'react';
import { DrawerNavigator } from 'react-navigation';
import { View,  Text,   Image } from 'react-native';

class Tela1 extends Component{
	static navigationOptions ={
		drawerLabel:"Tela 1",
		drawerIcon:() => (<Image source={ require('./image/chat_on.png')} />)			
	}
	render(){
		return (
			<View style={{marginTop:30, alignItems:'center'}}  > Tela 1</View>
			);
	}

}
class Tela2 extends Component{
	static navigationOptions = {
		drawerLabel:"Tela 2",
		drawerIcon:() => (
			<Image source={ require('./image/chat_on.png')} />
			)			
	}
	render(){
		return (
			<View style={{marginTop:30, alignItems:'center'}}  > Tela 1</View>
			);
	}

}
const Navegador = DrawerNavigator({
  Tela1: {
    screen:Tela1
  },
  Tela2: {
    screen:Tela2
  }


}, {
	drawerPosition: 'right',
	drawerWidth: 140,
	drawerBackgroundColor: "#FF00FF",
	contentOptions:{
		activeTintColor: '#EEE',
		itemsContainerStyle:{
		marginTop:30
		},
		itemsStyle:{
				height:200
		},
		labelStyle:{

		},
		iconContainerStyle:{
			
		}
	}
});
export default Navegador;


























