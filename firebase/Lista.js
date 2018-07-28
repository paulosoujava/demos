import React, { Component } from 'react';
import firebase from 'firebase';
import { View,
		 Text,
		 StyleSheet,
		 FlatList,
		 ActivityIndicator } from 'react-native';


export default class TodoOnline extends Component{
	constructor(props){
		super(props);
		this.state = {
			lista:[],
			loading:true 
		};


		
		
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
 	
 		firebase.database().ref('usuario').on('value', (snapshot)=>{
		  	let state = this.state;
 		 	state.lista = [];
		   	state.loading = false;

			snapshot.forEach( (childItem)=>{
		   		state.lista.push({
		   			key:childItem.key,
		   			nome:childItem.val().nome,
		   			idade:childItem.val().idade,
		   		});
		   	});

		   	this.setState(state);
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
					<View style={styles.container}>
						<FlatList 
							data={this.state.lista}
							renderItem={({item})=><Text style={styles.textLabel}>{item.nome}, {item.idade} anos {item.key}</Text> }
							/>

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

