import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements'
import Dimensions from 'Dimensions';
import Result from './Result'

const x = Dimensions.get('window').width;
const y = Dimensions.get('window').height;

import db from './db';

const Result = (props) => {
  return (
  <View style={{flex: 1 , backgroundColor: 'rgba(0,0,0,0.2)', justifyContent: 'center', alignItems: 'center'}}>
    <Text>Correct</Text>
  </View>
  )
}

class Main extends React.Component {

  checkAnswer = () => {
    console.log('bean');
    return(
      <View style={{flex: 1 , backgroundColor: 'rgba(0,0,0,0.2)', justifyContent: 'center', alignItems: 'center'}}>
        <Text>Correct</Text>
      </View>
    )
  }
  render() {
    return (
      <View style={styles.container}>
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'column',}}>
                <Text style={styles.word}>ABURO</Text>
                <Text style={{fontSize: 20, paddingBottom: x * 0.5}}>A Younger One</Text>
                <View style={{flexDirection: 'column', justifyContent:'flex-end'}}>
                  <View style={styles.innerStyle}>
                      <Button 
                      buttonStyle={styles.buttonStyle}
                      large
                      backgroundColor="#1EB9B9"
                      title='àbúrò'
                      onPress={this.checkAnswer}
                      />
                  </View>
                  <View style={styles.innerStyle}>
                      <Button
                      large
                      buttonStyle={styles.buttonStyle}
                      backgroundColor="#1EB9B9"
                      title='aburo'
                      />
                  </View>
                  <View style={styles.innerStyle}>
                      <Button 
                      buttonStyle={styles.buttonStyle}
                      large
                      backgroundColor="#1EB9B9"
                      title='ábúrọ'
                      />
                  </View>
                </View>      
                </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  word: {
    color: '#1EB9B9',
    fontWeight: 'bold',
    fontSize: 30,
    fontWeight: 'bold'
  },
  red: {
    color: 'red',
  },
  buttonStyle: {
    borderRadius: 10,
    width: x * 0.8,
  },
  innerStyle: {
    padding: 10
  }
});

export default  Main
