import React, { Component } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

export default class ConfigScreenProfile extends Component {

	static navigationOptions = ({navigation}) => ({
		drawerLabel:'Config. do Perfil',

		tabBarLabel:"Configurações",
		tabBarIcon:({tintColor, focused}) => {
			if(focused) {
				return (
					<Image source={require('../image/config_on.png')} style={{width:20, height:20}} />
				);
			} else {
				return (
					<Image source={require('../image/config_off.png')} style={{width:20, height:20}} />
				);
			}					
		}
	});

	render() {
		return (
			<View style={styles.container}>
				<Text>Tela de configurações do perfil</Text>
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