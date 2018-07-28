import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';


export default class FlatListDemo extends Component {
  constructor(props){
    super(props);
    this.state={
      flatData : [
        {key:'1', nome: 'PAULO OLIVEIRA', idade:36},
        {key:'2', nome: 'JENEFER OLIVEIRA', idade:36},
        {key:'3', nome: 'MALU OLIVEIRA', idade:1},
        {key:'4', nome: 'VANA OLIVEIRA', idade:56},
        {key:'5', nome: 'RICARDO OLIVEIRA', idade:29},
        {key:'6', nome: 'ANA PAULA OLIVEIRA', idade:40}
      ]
    }
  }

  flatRender(item){
    return(
      <View style={styles.containerFlat}>
          
            <Text style={styles.itemFlatNome}> {item.nome}
            </Text>
            <Text style={styles.itemFlatIdade}> {item.idade} anos
            </Text>
          
      </View>
      
      );
  }
  render(){
    return(
      // RECYCLERVIEW parecido
      <View style={styles.body}>
            <FlatList  data={this.state.flatData} renderItem={({item}) => this.flatRender(item)} />
      </View>
      );
    }
}

const styles = StyleSheet.create({
  body:{
    marginTop:20,
  },
  itemFlatNome:{
    fontSize:30,
  },
  itemFlatIdade:{
    fontSize:20,
    marginLeft:9
  },
  containerFlat:{
    backgroundColor:'#EEE',
    marginBottom:2
  }
});















