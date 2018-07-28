import React, { Component } from 'react';
import { View, StyleSheet, Text, Modal, Button } from 'react-native';


export default class ModalDemo extends Component {
  constructor(props){
    super(props);
    this.state = {
      modalVisible : false
    };  
    this.abirModal = this.abirModal.bind(this);
    this.fecharModal = this.fecharModal.bind(this);
  }

  abirModal(){
    let s = this.state;
    s.modalVisible = true;
    this.setState(s);
  }
  fecharModal(){
    let s = this.state;
    s.modalVisible = false;
    this.setState(s);
  }
  render(){
 return(
      <View  style={styles.body}>
       
        <Modal  style={styles.mModal} animationType="slide" visible={this.state.modalVisible} >
                  
          <View style={styles.modal}>
            <View style={styles.close}>
              <Button title="X" onPress={this.fecharModal} />
            </View>    
              <Text> BLA BLA BLA </Text>
          </View>
        </Modal>

        <Button title="Open" onPress={this.abirModal} />
      </View>
      );
    }
}

const styles = StyleSheet.create({
  body:{
    marginTop:20,
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  mModal:{
    backgroundColor:"#000",
     flex:3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modal:{
    flex:2,
    alignItems: 'center',
    marginTop:30,
    backgroundColor:"#00FFEE"
  },
  close:{
    flex:1,
    alignItems: 'flex-end',
    
  }
});

