import React from 'react';
import {Text,  Alert, View, Image, TouchableOpacity,StyleSheet, TextInput, Button} from 'react-native';
import {KeyboardAvoidingView} from 'reactToastAndroid-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
import firebase from 'firebase';
import db from './StoryHub3/config';

export default class WriteStoryScreen extends React.Component {
  constructor(){
    super();
    this.state={
      title: '',
      author: '',
      story: '',
    }
}

submitStory = ()=>{
  db.collection("stories").add({
      title: this.state.title,
      author: this.state.author,
      story: this.state.story
  })
  this.setState({
      title: "",
      author: "",
      story: ""
  })
  //ToastAndroid.show(" Your story has been submitted",ToastAndroid.LONG)
  //ToastAndroid.show(" Your story has been submitted",ToastAndroid.SHORT)
  Alert.alert('✔ The Story has been published!');
}

  render() {
    return (
      <KeyboardAvoidingView style={{alignItems:'center', marginTop:20}}>
      <View style={styles.container}>
      <View>
        <Image
            source = {require("write.png")}
            style= {{width:100, height:100}}/>
            </View>
           
        <Text style={{textAlign:'center', fontSize:30, fontWeight: "bold"}}>Story Hub</Text>
        <View style={styles.inputView}>
         <TextInput style={styles.inputBox} placeholder="Title of Story:"/>
         </View>
         <View style={styles.inputView}>
                  <TextInput style={styles.inputBox} placeholder="Author Name:"/>
                  </View>
                 <View style={styles.inputView}>
               
                <TextInput
      style={styles.textArea}
      underlineColorAndroid="transparent"
      placeholder="Start Writing Here!"
      placeholderTextColor="lightgrey"
      numberOfLines={10}
      multiline={true}
    />




    
     <View style={styles.inputView}>
       <TouchableOpacity
          style={styles.submitButton}
          onPress={this.submitStory}
            >
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
        

 </View>
</View>
      </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',
    alignItems: 'center'
  },
  
  inputBox:{
    width: 300,
    height: 30,
    borderWidth: 1.5,

    fontSize: 20
  },
  inputView:{
    flexDirection: 'row',
    margin: 10
  },
  
  textArea: {
    height: 150,
    justifyContent: "flex-start",
    width : 300,
    borderWidth: 1.5,
  },
  submitButton:{
    backgroundColor: '#FBC02D',
    width: 100,
    height:30,
    alignSelf: 'center',
    marginTop: 100

  },
  submitButtonText:{

    textAlign: 'center',
    fontSize: 15,
    fontWeight:"bold",
    color: 'white'
  }
});
