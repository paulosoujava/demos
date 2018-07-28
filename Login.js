import React, { Component } from 'react';
import FirebaseInstance from './FirebaseInstance';
import { View,
		 Text,
		 TextInput,
		 StyleSheet,
		 Button,
		 ActivityIndicator,
		 ScrollView,
		 AsyncStorage } from 'react-native';


export default class Login extends Component{

	static navigationOptions = {
		header: null
	}

	constructor(props){
		super(props);
		this.state = {
			email: '',
			pass: '',
			loading:false,
			info:false, 
		};

		this.toDoLogin = this.toDoLogin.bind(this);
		this.isLoginIn = this.isLoginIn.bind(this);
		this.logout = this.logout.bind(this);

		AsyncStorage.getItem("EMAIL").then((e)=>{
				if(e != '')	{
					this.setState({email: e});
				}
					
		});

		//se logado vai
		AsyncStorage.getItem("isLoginIN").then((value)=>{
				if(value != '' && value != 'NOT')	
					this.props.navigation.navigate('Home');
		});
     }


     isLoginIn(){
     	FirebaseInstance.listener((user)=>{
		    if( user ){
		    	FirebaseInstance.getUser( (info)=>{
		     		AsyncStorage.setItem("isLoginIN", "YEP");
 					AsyncStorage.setItem("nome", info.val().nome );
 					this.props.navigation.navigate('Home');

 					let state = this.state;
					state.loading = false;
					state.info = true;
					this.setState(this.state);
		       });
		    }
		    
		});
     }
		
toDoLogin(){
	let state = this.state;
	state.loading = true;
	this.setState(state);
	AsyncStorage.setItem("EMAIL", this.state.email );
	FirebaseInstance.toDoLoginFirebase(this.state.email, this.state.pass).catch((err)=>{alert(err.code);});
	this.isLoginIn();
}
logout(){
	FirebaseInstance.getOut();
	let state = this.state;
	state.info =false;
	AsyncStorage.setItem("isLoginIN", 'NOT');
	this.setState(state);
	}	

	render(){
				if( this.state.loading){
					return(	
		 				 <View style={styles.containerLoad}>
		 		        	  <ActivityIndicator size="large" color="#0000ff" />
		 		      	</View>
		 		      );
				}else if(this.state.info){
						return(	
		 				 <View style={styles.containerLoad}>
		 		        	  <Text style={styles.textLabelTitle}>Você esta logado</Text>
		 		        	   <Button title="Sair" onPress={this.logout} />
		 		      	</View>
		 		      );
				}else{
					return(	
						<ScrollView>
								<View style={styles.container}>
								<Text style={styles.textLabelTitle}>Login</Text>
									<View style={styles.containerArea}>
										<Text style={styles.textLabel}>Email:</Text>
										<TextInput
										value={this.state.email}
											numberOfLines = {1}
											keyboardType= {'email-address'}
											style={styles.inputStyle} onChangeText={(email)=>this.setState({email})} />
										<Text style={styles.textLabel}>Senha:</Text>
										<TextInput  
											numberOfLines = {1}
											secureTextEntry={true} style={styles.inputStyle} onChangeText={(pass)=>this.setState({pass})} />
										  <Button title="Login" onPress={this.toDoLogin} />
									</View>
								 </View>
							 </ScrollView>
						);
				}
			}
		}
		
	

const styles = StyleSheet.create({
container:{
	flex:1,
	marginTop:20,
	elevation:8,
	   justifyContent: 'center'
  }, 
  containerLoad: {
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

