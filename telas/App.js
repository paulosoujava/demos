import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import Tela1 from './telas/src/Tela1';
import Tela2 from './telas/src/Tela2';
import Tela3 from './telas/src/Tela3';

const Navegador = StackNavigator({
  Tela1: {
    screen:Tela1

  },
  Tela2: {
    screen:Tela2
  },
  Tela3: {
    screen:Tela3
  }
}, {
	
	//remove o toolbar para todos
	//headerMode:'none'

	//tela que faz a maniulacao o nome em cima fica fixo efeito de transicao de tela
	//headerMode:'float'

	//tooblar faz a transicao junto com tela
	//headerMode:'screen'

	//padrao de movimentacao
	headerMode: 'float'
});
export default Navegador;

