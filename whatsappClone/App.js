import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';

import TelaInicial from './whatsappClone/TelaInicial';
import ConversationScreen from './whatsappClone/ConversationScreen';
import ConfigScreen from './whatsappClone/ConfigScreen';

const Navegador = TabNavigator({
  Home: {
    screen:TelaInicial
  },
  Conversa: {
    screen:ConversationScreen
  },
  Config: {
    screen:ConfigScreen
  }
});
export default Navegador;















