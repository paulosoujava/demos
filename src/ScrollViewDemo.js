import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';


export default class MyScrollView extends Component {
  render(){
    return(
      <View style={styles.body}>
        {/*<ScrollView >*/}
        <View style={styles.header}>
        <Text style={styles.header_title}>header Fixed</Text>
        </View>
        <ScrollView  pagingEnabled={true}>  
            <View style={styles.v1}></View>
            <View style={styles.v2}></View>
            <View style={styles.v1}></View>
            <View style={styles.v1}></View>
            <View style={styles.v2}></View>
            <View style={styles.v1}></View>
            <View style={styles.v1}></View>
            <View style={styles.v2}></View>
            <View style={styles.v1}></View>
        </ScrollView>
      </View>
      );
    }
}

const styles = StyleSheet.create({
  body:{
    marginTop:20,
    flex:1
  },
   v1:{
    backgroundColor:'#FF0000',
    height:200
  },
   v2:{
    backgroundColor:'#00FF00',
    height:200
  },
   header:{
    backgroundColor:'#FFF',
    height:56,
    elevation:4
  },
  header_title:{
    color:'#000',
    alignSelf: 'center',
    paddingTop:10,
    fontSize:30,
    justifyContent:'flex-end'
  }
});















