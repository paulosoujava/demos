import React, { Component } from 'react';
import { View, StyleSheet, SectionList, Text, Image } from 'react-native';


export default class SectionListDemo extends Component {
  constructor(props){
    super(props);
    this.state={
      listData : [
      
            {title:'A', data:[
                  {key:'1', nome: 'ANA', idade:36},
                 {key:'2', nome: 'AMANDA', idade:36},
                 {key:'3', nome: 'ANDRE', idade:1},
             
         ]},
         {title:'B', data:[
                {key:'4', nome: 'BRUNO', idade:56},
                {key:'5', nome: 'BIANCA ', idade:29},
                {key:'6', nome: 'BRUNA', idade:40}
         ]},
         {title:'C', data:[
                {key:'4', nome: 'CARLA', idade:56},
                {key:'5', nome: 'CRIS ', idade:29},
                {key:'6', nome: 'CAMILA', idade:40}
         ]},
         {title:'D', data:[
                {key:'4', nome: 'DIANA', idade:56},
                {key:'5', nome: 'DAINA ', idade:29},
                {key:'6', nome: 'DRIKA', idade:40}
         ]},
        ]
    }
  }

  listRender(item){
    return(
      <View style={styles.containerFlat}>
          
            <Text style={styles.itemListNome}> {item.nome}
            </Text>
            <Text style={styles.itemListIdade}> {item.idade} anos
            </Text>
          
      </View>
      
      );
  }
  listSectionRender(section){
     return(
       <View style={styles.containerList}>
       <Image source={require('./image/mimimi.jpg')} style={{width: 40, height: 40,  borderRadius:20}}/>;
          
            <Text style={styles.titleList}> {section.title}</Text>
        </View>
      );
  }
  render(){
    return(
      // RECYCLERVIEW parecido
      <View style={styles.body}>
            <SectionList
                sections={this.state.listData}
                renderItem={({item})=>this.listRender(item)} 
                renderSectionHeader={({section})=>this.listSectionRender(section)} />
      </View>
      );
    }
}

const styles = StyleSheet.create({
  body:{
    marginTop:20,
  },
  itemListNome:{
    fontSize:30,
  },
  itemListIdade:{
    fontSize:20,
    marginLeft:9
  },
  containerList:{
    backgroundColor:'#EEE',
    marginBottom:2
  },
  titleList:{
    fontSize:20,
    marginLeft:9,
    
  },
});















