import React, { Component } from 'react';
import { View, Text, StyleSheet,FlatList,Image,ActivityIndicator } from 'react-native';

export default class Lista extends Component{
	constructor(props){
		super(props);
		this.state = {data:[], loading:true };

		fetch('https://jsonplaceholder.typicode.com/photos')
  		.then(response => response.json())
  		.then( (json)=>{
  			let state = this.state;
  			this.state.data =  json;
  			this.state.loading = false;
  			this.setState(state);
  		});

	}

	render(){
		if( this.state.loading ){
			return(	
					 <View style={[styles.containerLoad, styles.horizontal]}>
				          <ActivityIndicator size="large" color="#0000ff" />
				      </View>
				);
		}else{
			return(	
					<View style={styles.container}>
					<FlatList 
						data={this.state.data}
						renderItem={({item})=> <Albun data={item} />}
						keyExtractor={(item, index) => item.title}
						/>

					 </View>
				);
		}
	}
}
class Albun extends Component{
	render(){
		return( 
			  	<View  style={styles.areaAlbun}>		  	
			  	  <Image source={{uri:this.props.data.thumbnailUrl.replace( 'http:', 'https:')}} style={styles.image} />
			  	  	<View   style={styles.albunInfo}>
			  			<Text>{this.props.data.title}</Text>
			  		</View>
			    </View> 
			   );
	}
}
const styles = StyleSheet.create({
container:{
	flex:1,
	marginTop:20
},
areaAlbun:{
	flex:1,
	flexDirection: 'row'
},
containerLoad: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  },
image:{
	width:80,
	height:110
}
,
albunInfo:{
	flex:1,
	padding:10,
	flexDirection: 'column'
}
});

