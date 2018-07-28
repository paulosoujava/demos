import React, { Component } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

export default class ConversationScreenList extends Component {

	static navigationOptions = ({navigation}) => ({
		title:"Conversas",
		tabBarLabel:"Conversas",
		tabBarOptions: { showIcon:true },
		tabBarIcon:({tintColor, focused}) => {
			if(focused) {
				return (
					<Image source={require('../image/chat_on.png')} style={{width:20, height:20}} />
				);
			} else {
				return (
					<Image source={require('../image/chat_off.png')} style={{width:20, height:20}} />
				);
			}					
		}
	});

	render() {
		return (
			<View style={styles.container}>
				<Text>Tela de conversa</Text>

				<Button title="Paulo" onPress={()=>this.props.navigation.navigate('ConversationScreenChat', {nome:'Paulo'})} />
				<Button title="João" onPress={()=>this.props.navigation.navigate('ConversationScreenChat', {nome:'João'})} />
			</View>
		);
	}

}

const styles = StyleSheet.create({
	container:{
		flex:1,
		justifyContent:'center',
		alignItems:'center',
		marginTop:20
	}
});