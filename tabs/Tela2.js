import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default class Tela2 extends Component {

	static navigationOptions = ({navigation}) => ({
		title:"Tela 2"
	});

	constructor(props) {
		super(props);
		this.state = {};

		this.abrirTela = this.abrirTela.bind(this);
	}

	abrirTela() {
		this.props.navigation.navigate("Tela3");
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>Tela 2</Text>

				<Button title="Ir para Tela 3" onPress={this.abrirTela} />
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




