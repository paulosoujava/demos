import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableHighlight, Button } from 'react-native';

export default class Item extends Component{
	constructor(props){
		super(props);
		this.state= {
			done: (this.props.data.done == '1' )? styles.done : styles.undone
		};
		
		this.setMarkThis = this.setMarkThis.bind(this);
		this.delete = this.delete.bind(this);
	}
	
	delete(){
		fetch(this.props.url + '/' + this.props.data.id, {
					method: 'DELETE',
					headers:{
						'Accept': 'application/json',
						'Content-Type': 'application/json'
					}
				})
				.then( (r) => r.json() )
				.then( (json) =>{
					this.props.loadFunction();
					alert("Deletado com sucesso");
				});
	}

	setMarkThis(){
		
		let state = this.state;
		let done = 'sim';

		if( state.done == styles.undone ){
			state.done = styles.done;
		}else{
			state.done = styles.undone;
			done = 'nao';
		}
		fetch(this.props.url + '/' + this.props.data.id, {
					method: 'PUT',
					headers:{
						'Accept': 'application/json',
						'Content-Type': 'application/json'
					},
					body:JSON.stringify({
						done:done
					})
				})
				.then( (r) => r.json() )
				.then( (json) =>{});

		this.setState(state);

	}
	render(){
		
				return(
					<View style={styles.container}>
						<TouchableHighlight onPress={this.setMarkThis} style={[styles.mark, this.state.done]}>
							<View> </View>
						</TouchableHighlight>
						
						<View style={styles.containerItens} >
							<Text  style={styles.itemText}>{this.props.data.item}</Text>
							<Button  style={styles.itemDelete} color="#f44265" title="X"  onPress={this.delete}/>
						</View>
						
					
					</View>
				);
		
	}
}
const styles = StyleSheet.create({
container:{
	marginLeft:10,
	paddingTop:10,
	paddingBottom:10,
	borderBottomWidth:1,
	borderColor: '#CCC',
	flex:1,
	flexDirection: 'row',
	alignItems: 'center'
  },
  containerItens:{
	flex:1,
	flexDirection: 'row'
  },
  itemText:{
  	flex: 9, 
  	padding:9,
	fontSize:20
  },
  itemDelete:{
  	flex: 1,
  	height:40,
  	justifyContent: 'flex-end',
	fontSize:25,
	
	fontWeight: 'bold'
  },
  mark:{
  	width:40,
  	height:40,
  	padding:9,
  	borderRadius:20,
	
  },
  undone:{
	backgroundColor: '#CCC',  	
  },
  done:{
	backgroundColor: '#00FF00',  	
  }
  });