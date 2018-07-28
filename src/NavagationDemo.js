import React, { Component } from 'react';

// import  { StackNavigator } from 'react-navigation';
 // import  { TabNavigator } from 'react-navigation';

 import  { DrawerNavigator } from 'react-navigation';

// PAGES
import  PageOne from './page/PageOne';
import  PageTwo from './page/PageTwo';



const Navegador = DrawerNavigator({
  PageOne:{
    screen: PageOne
  },
  PageTwo:{
    screen: PageTwo
  }
});
export default Navegador; 


/*
const Navegador = TabNavigator({
  PageOne:{
    screen: PageOne
  },
  PageTwo:{
    screen: PageTwo
  }
});
export default Navegador; 

*/

/*
const Navegador = StackNavigator({
  PageOne:{
    screen: PageOne
  },
  PageTwo:{
    screen: PageTwo
  }
});
export default Navegador; 
*/













