import React, { Component } from 'react';
import FirebaseInstance from './FirebaseInstance';
import { View, Text, StyleSheet, Button, AsyncStorage} from 'react-native';


export default class Home extends Component{

	static navigationOptions = {
		title: 'HOME',
		header: null
	}

	constructor(props){
		super(props);
		this.state = {nome: ''};

		AsyncStorage.getItem("nome").then((value)=>{
				this.setState({nome: value});
			});

		this.logout = this.logout.bind(this);
     }

logout(){
	AsyncStorage.setItem("isLoginIN", 'NOT');
	FirebaseInstance.getOut();
	this.props.navigation.navigate('Login');
	}

	render(){
			return(	
				
				<View style={styles.container}>
						<Text style={styles.textLabel}>{this.state.nome}</Text>
						<Button title="Sair" onPress={this.logout} />
				 </View>
					 
				);
		
	}
}
const styles = StyleSheet.create({
container:{
	flex:1,
	marginTop:20,
	elevation:8
  }, containerLoad: {
     flex: 1,
     justifyContent: 'center'
   },
   textLabelTitle:{
	padding:10,
  	marginTop:5,
  	fontSize:20,
  	
   },
  textLabel:{
  	padding:10,
  	marginTop:5,
  	marginLeft:10
  },
  inputStyle:{
  	height:40,
  	backgroundColor:'#CCC',
  	paddingLeft:10,
  	marginRight:20,
	marginLeft:20,
  },
  containerArea:{
	marginBottom:20
  },
});

