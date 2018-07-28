import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationActions } from 'react-navigation';

export default class Tela3 extends Component {

	static navigationOptions = ({navigation}) => ({
		title:"Tela 3"
	});

	constructor(props) {
		super(props);
		this.state = {};

		this.voltarTela = this.voltarTela.bind(this);
	}

	voltarTela() {
		this.props.navigation.dispatch(NavigationActions.reset({
			index:0,
			actions:[
				NavigationActions.navigate({routeName:'Tela1'})
			]
		}));
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>Tela 3</Text>		

				<Button title="Voltar para Inicio" onPress={this.voltarTela} />	
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




