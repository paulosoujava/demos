


import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';

import Tela1 from './tabs/Tela1';
import Tela2 from './tabs/Tela2';
import Tela3 from './tabs/Tela3';

const Navegador = TabNavigator({
  Tela1: {
    screen:Tela1
  },
  Tela2: {
    screen:Tela2
  },
  Tela3: {
    screen:Tela3
  }
},{
tabBarPosition: 'top',
animationEnabled:false,
initialRouteName: 'Tela3',
	tabBarOptions:{
		showIcon:true,
		showLaber:true,
		activeTintColor: '#FF0000',
		pressColor: '#000', //somente para o android highlitgh 5+
	tabStyle:{
	backgroundColor: '#FFFF00'
	},
	indicatorStyle:{

	},
	labelStyle:{
		fontSize:20
	},
	iconStyle:{
		
	}
}

});
export default Navegador;


























