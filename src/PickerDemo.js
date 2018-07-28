import React, { Component } from 'react';
import { View, StyleSheet, Text, Picker } from 'react-native';


export default class PickerDemo extends Component {
  constructor(props){
    super(props);
    this.state = {
      service:0, 
      servicos:[
      {nome: 'Alinhamento', valor:30},
      {nome: 'Geometriaia', valor:130},
      {nome: 'Regular valuvula', valor:230},
      {nome: 'Freio a disco', valor:230},
      {nome: 'Embreagem', valor:330}, 
      ]
    };
  }
  render(){

    let servicosItems = this.state.servicos.map( (value,key) => {
      return <Picker.Item key={key} value={key} label={value.nome} />
    });
    return(
      <View style={styles.body}>
        <Text style={styles.text}> Paulo Auto-peças</Text>
            <Picker selectedValue={this.state.service} onValueChange={(itemValue, itemIndex) => this.setState({service:itemValue})}>
              {servicosItems}
            </Picker>

            <Text style={styles.valor}>R$: {this.state.servicos[this.state.service].valor}</Text>
      </View>
      );
    }
}

const styles = StyleSheet.create({
  body:{
    marginTop:20,
    flex:1
  },
   text:{
    padding:20,
    textAlign: 'center',
    backgroundColor:'#DDD'

  },
  valor:{
    textAlign: 'center',
    fontSize:35
  }
});















