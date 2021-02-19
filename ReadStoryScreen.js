import React from 'react';
import { Text, View } from 'react-native';

export default class ReadStoryScreen extends React.Component {
    render() {
      return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Image
            source = {require("read.png")}
            style= {{width:100, height:100}}/>
          <Text>Read the Stories here!</Text>
        </View>
      );
    }
  }