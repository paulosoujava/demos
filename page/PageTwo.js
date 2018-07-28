
import React, { Component } from 'react';
import { View,  Text, Image } from 'react-native';


export default class PageTwo extends Component{

  static navigationOptions = ({navigation}) =>({
  	// title : "TabNa"
  // title : navigation.state.params.nome

  // tabBarLabel : "Home",
  // tabBarIcon: (tintColor, focused) => {
  //    if(focused)
  //    return(<Image source={require('../image/icon1.png')} style={{width: 26, height:26}} />);
  //  else
  //    return(<Image source={require('../image/icon2.png')} style={{width: 26, height:26}} />);
 
  // }

  drawerLabel:"Page One",
  drawerIcon: (tintColor, focused) => {
      if(focused)
      return(<Image source={require('../image/icon1.png')} style={{width: 20, height:20}} />);
    else
      return(<Image source={require('../image/icon2.png')} style={{width: 20, height:20}} />);
 
   }
});

  render(){
    return(
            <View style={{marginTop:30, alignItems:'center'}}  >
              {/*<Text>Ola {this.props.navigation.state.params.nome} </Text>*/}
              <Text>Ola NAVAGATIONS </Text>
            </View>
      );
  }
}
