import React, { Component } from 'react';
import firebase from 'firebase';
import { View,
		 Text,
		 TextInput,
		 StyleSheet,
		 Button,
		 ActivityIndicator } from 'react-native';


export default class TodoOnline extends Component{
	constructor(props){
		super(props);
		this.state = {
			email: '',
			pass: '',
			loading:false 
		};

		this.create = this.create.bind(this);
		this.logar = this.logar.bind(this);
		this.getOut = this.getOut.bind(this);

		  // Initialize Firebase
		  let config = {
		    apiKey: "AIzaSyA-u7yx-6W2-E7NbSIRIhNCSneEdp3vES0",
		    authDomain: "todo-42d0d.firebaseapp.com",
		    databaseURL: "https://todo-42d0d.firebaseio.com",
		    projectId: "todo-42d0d",
		    storageBucket: "",
		    messagingSenderId: "364578861505"
		  };
		  
		  firebase.initializeApp(config);

		  
		  firebase.auth().onAuthStateChanged((user)=>{
				if( user )
					alert( user.email+ "Logado" );
		  });
}

	create(){

		if(this.state.email  == '' ||  this.state.pass == '' )
			return;
		
		firebase.auth()
		.createUserWithEmailAndPassword(
			this.state.email, 
			this.state.pass 
			).catch( ( e )=>{

				switch( e.code ){
					case 'auth/weak-password':
						alert( "Senha muito fraca" );
					 break;
					 case 'auth/email-already-in-use':
						alert( "Email em uso" );
					 break;
					 
					 default:
					 	alert( "Erro desconhecido" )
				}
			});
	}
	getOut(){
		firebase.auth().signOut();
	}
	logar(){
		if(this.state.email  == '' ||  this.state.pass == '' )
			return;

		if( this.state.email.length > 4 &&  this.state.pass.length > 5 ){

			firebase.auth().signInWithEmailAndPassword(
				this.state.email, 
				this.state.pass 
				
			).catch( ( e )=>{
	//alert(e.code)
					switch( e.code ){
						case 'auth/wrong-password':
						case 'auth/invalid-email':
							alert( "Ops, verifique seus dados." );
						 break;
						 case 'auth/email-already-in-use':
							alert( "Email em uso" );
						 break;
						 
						 default:
						 	alert( "Erro desconhecido" )
					}
				});
		}else{
			alert( "Ops, email/senha inválidos" );
		}
	}
	render(){
		 if( this.state.loading ){
		 	return(	
		 			 <View style={styles.containerLoad}>
		 		          <ActivityIndicator size="large" color="#0000ff" />
		 		      </View>
		 		);
		 }else{
			return(	
					<View style={styles.container}>
						<View style={styles.containerArea}>
							
							<Text style={styles.textLabel}>Email:</Text>

							<TextInput
								numberOfLines = {1}
								autoFocus = {true}
								keyboardType= {'email-address'}
								style={styles.inputStyle} onChangeText={(email)=>this.setState({email})} />

							<Text style={styles.textLabel}>Senha:</Text>
							<TextInput  
							numberOfLines = {1}

							secureTextEntry={true} style={styles.inputStyle} onChangeText={(pass)=>this.setState({pass})} />

							  <Button title="Adicionar" onPress={this.create} />
							  <Button title="Login" onPress={this.logar} />
							  <Button title="Sair" onPress={this.getOut} />
						</View>
					 </View>
				);
		}
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
  textLabel:{
  	padding:10,
  	marginTop:5
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

