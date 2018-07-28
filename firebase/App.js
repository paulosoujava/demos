import React, { Component } from 'react';
import firebase from 'firebase';
import { View,
		 Text,
		 StyleSheet,
		 FlatList,
		 Image,
		 TextInput,
		 Button,
		 ActivityIndicator,
		 AsyncStorage } from 'react-native';


export default class TodoOnline extends Component{
	constructor(props){
		super(props);
		this.state = {
			nomeInput: '',
			idadeInput: '',
			loading:true 
		};


		this.addUser = this.addUser .bind(this);
		
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
			//listener em nome o  on('value') == escute  em nome este valor
			//listener em nome o  on('value_changed') == escute  as mudanças em nome 
		 
		 	//escutando apenas uma vez
 			// firebase.database().ref('nome').once('value').then(snapshot)=>{
		  firebase.database().ref('nome').on('value', (snapshot)=>{
		  	let state = this.state;
		  	state.nome = snapshot.val();
		  	state.loading = false;
		  	this.setState(this.state);

		  });

}

	addUser(){
		if( this.state.nomeInput.length > 0 ){
			
			// let state = this.state;
		 // 	state.nomeInput = '';
		 // 	state.idadeInput = '';
		 // 	this.setState(state);
			
			let user = firebase.database().ref('usuario');
			let key =  user.push().key;
			user.child(key).set({
				nome: this.state.nomeInput,
				idade: this.state.idadeInput
			});
			alert('Inserido com sucesso');

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
							
							<Text style={styles.textLabel}>Nome:</Text>

							<TextInput  style={styles.inputStyle} onChangeText={ ( nomeInput ) => this.setState({nomeInput})} />

							<Text style={styles.textLabel}>Idade:</Text>
							<TextInput  style={styles.inputStyle} onChangeText={ ( idadeInput ) => this.setState({idadeInput})} />

							 <Button title="Adicionar" onPress={this.addUser} />
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

