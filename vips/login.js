import React, { Component } from 'react';
import firebase from 'firebase';
import { View,
		 Text,
		 TextInput,
		 StyleSheet,
		 Button,
		 ActivityIndicator,
		 ScrollView } from 'react-native';


export default class TodoOnline extends Component{
	constructor(props){
		super(props);
		this.state = {
			email: '',
			pass: '',
			loading:false 
		};

		this.logar = this.logar.bind(this);
	
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
		  	if( user ){
		  		alert("Ja ta logado");
		  	}
		 });
}

	logar(){
		
		if(this.state.email  == '' ||  this.state.pass == ''  )
			return;

		
		let state = this.state;
		state.loading = true;
		this.setState(state);
		firebase.auth()
		.signInWithEmailAndPassword(
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

	render(){
		 if( this.state.loading ){
		 	return(	
		 			 <View style={styles.containerLoad}>
		 		          <ActivityIndicator size="large" color="#0000ff" />
		 		      </View>
		 		);
		 }else{
			return(	
				<ScrollView>
						<View style={styles.container}>
						<Text style={styles.textLabelTitle}>Novo Usuário:</Text>
							<View style={styles.containerArea}>
								<Text style={styles.textLabel}>Email:</Text>
								<TextInput
									numberOfLines = {1}
									keyboardType= {'email-address'}
									style={styles.inputStyle} onChangeText={(email)=>this.setState({email})} />
								<Text style={styles.textLabel}>Senha:</Text>
								<TextInput  
									numberOfLines = {1}
									secureTextEntry={true} style={styles.inputStyle} onChangeText={(pass)=>this.setState({pass})} />
								  <Button title="Login" onPress={this.logar} />
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

