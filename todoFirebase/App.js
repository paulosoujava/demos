import React, { Component } from 'react';
import firebase from 'firebase';
import { View,
		 Text,
		 TextInput,
		 StyleSheet,
		 Button,
		 ActivityIndicator,
		 FlatList } from 'react-native';


export default class TodoOnline extends Component{
	constructor(props){
		super(props);
		this.state = {
			email: '',
			pass: '',
			addItem: '',
			uid: '',
			lista: [],
			loading:false
		};

		this.logout = this.logout.bind(this);
		this.logar = this.logar.bind(this);
		this.add = this.add.bind(this);
	
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
		  		let state = this.state;
		  		state.uid = user.uid;
		  		state.loading = true;
		  		this.setState(state);

		  		firebase.database().ref('usuario').child(user.uid).once('value')
		  		.then((snapshot)=>{

					let nome = snapshot.val().nome;
					state.loading = false;
					this.setState(state);
		  		});

		  		firebase.database().ref('todo').child(user.uid).on('value',(snapshot)=>{
		  			let state = this.state;
		  			state.lista = [];
			  			snapshot.forEach((childItem)=>{
			  				state.lista.push({
			  					titulo: childItem.val().titulo,
			  					key: childItem.key
			  				});
			  			});

		  		});

		  		
		  	}
		  	 
		  	
		  });
	}
	add(){
		if( this.state.uid != '' && this.state.addItem != ''){
			let todo = firebase.database().ref('todo').child(this.state.uid);
			let key = todo.push().key;
			todo.child(key).set({
				titulo : this.state.addItem
			});
			let state = this.state;
			this.state.addItem = '';
			this.setState(state);
		}
	}
	logar(){
		
		if(this.state.email  == '' ||  this.state.pass == ''   )
			return;
	
		let state = this.state;
		state.loading = true;
		this.setState(state);
		firebase.auth()
		.signInWithEmailAndPassword(
			this.state.email, 
			this.state.pass 
			).catch( ( e )=>{
				alert( e.code );
			});
			
	}
	logout(){
		let state = this.state;
		 state.uid = '';
		 this.setState(state);
		firebase.auth().signOut();
	}

	render(){
		 if( this.state.loading ){
		 	return(	
		 			 <View style={styles.containerLoad}>
		 		          <ActivityIndicator size="large" color="#0000ff" />
		 		      </View>
		 		);
		 }else{
			
 				  if( this.state.uid != '' ){
					return(	
							<View style={styles.container}>
								<View style={styles.containerAdd}>
									<Text style={styles.textLabel}>Add:</Text>
									<TextInput
									value={this.state.addItem}
										numberOfLines = {1}
										style={styles.inputStyle} onChangeText={(addItem)=>this.setState({addItem})} />
									  
									  <Button title="Adicionar" onPress={this.add} />
									   <Button title="Sair" onPress={this.logout} />
								</View>

								<FlatList style={styles.list}
									data={this.state.lista}
									renderItem={({item}) => <Text>{item.titulo} </Text>}
									 />
							 </View>
						 );
 				  }else{
 				  	return(	
							<View style={styles.container}>
							
								<Text style={styles.textLabelTitle}>Login:</Text>

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
									
									  <Button title="logar" onPress={this.logar} />
								</View>
							 </View>
						);
 				  }
				
						
					 
				
		}
	}
}
const styles = StyleSheet.create({
container:{
	flex:1,
	marginTop:20,
	elevation:8
  },
  list:{
padding:10
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

