import React, { Component } from 'react';
import { View,
		 Text,
		 StyleSheet,
		 FlatList,
		 Image,
		 TextInput,
		 Button,
		 ActivityIndicator } from 'react-native';

import Item from './Item';


export default class TodoOnline extends Component{
	constructor(props){
		super(props);
		this.state = {
			lista:[],
			input: '',
			loading:true 
		};

		this.url = 'https://b7web.com.br/todo/36921';

		

		this.addItem = this.addItem.bind(this);
		this.loadList = this.loadList.bind(this);

		this.loadList();
	}
	
	loadList(){
		fetch(this.url)
			.then( (r) => r.json() )
			.then( (json) =>{
				let state = this.state;
				state.lista = json.todo;
				this.state.loading = false;
				this.setState(state);
			});
	}
	addItem(){
			let txt = this.state.input;
			let state = this.state;
			state.input = '';
			this.setState(state);
			if( txt.length > 0 ){
				fetch(this.url, {
					method: 'POST',
					headers:{
						'Accept': 'application/json',
						'Content-Type': 'application/json'
					},
					body:JSON.stringify({
						item:txt
					})
				})
				.then( (r) => r.json() )
				.then( (json) =>{
					alert("Adicionado com sucesso");
					this.loadList();
				});
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
							
							<Text style={styles.textLabel}>Nova Tarefa:</Text>

							<TextInput  style={styles.inputStyle} onChangeText={ (text) => {
							 	let state  = this.state;
							 	state.input = text;
							 	this.setState(state);
							 	}} value={this.state.input}
							 />
							 <Button title="Adicionar" onPress={this.addItem} />
						</View>
						<FlatList 
							data={this.state.lista} 
							renderItem={({item})=> <Item data={item} url={this.url} loadFunction={this.loadList} />}
							keyExtractor={(item, index) => item.id}
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
  },
  textLabel:{
  	padding:10
  },
  inputStyle:{
  	height:40,
  	backgroundColor:'#CCC',
  	paddingLeft:10,
  	marginRight:20,
	marginLeft:20,
  },
  containerArea:{
	marginBottom:20,
	backgroundColor:'#DDD',
	height:130
  },
 containerLoad: {
     flex: 1,
     justifyContent: 'center'
   },
});

