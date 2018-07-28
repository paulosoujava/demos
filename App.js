import React, { Component } from 'react';
import {StackNavigator} from 'react-navigation';
import Login from './Login';
import Home from './Home';

const Navegador = StackNavigator({
	Login:{
		screen:Login
	},
	Home:{
		screen: Home
	}
});

export default Navegador;

