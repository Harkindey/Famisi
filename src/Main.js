import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements'

import db from './db';

 const Question =  () =>  {
   return (
     <View style={{flex: 1}}>
        {db.map((item, index) => {
          console.log(item, index);
          return(
              <View key={index} style={{ flex: 1}}>
                <Text>ABURO</Text>
                <Text>A Younger One</Text>
                <View style={{flex: 1, flexDirection: 'column'}>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <Button 
                    raised
                    title='àbúrò'
                    />
                    <Button 
                    raised
                    title='aburo'
                    />
                  </View>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                  <Button 
                  raised
                  title='ábúrọ'
                  />
                  <Button 
                  raised
                  title='àbùrọ̀'
                  />
                  </View>
                </View>
              </View>
          )
        })}
     </View>
   )
 }

class Main extends React.Component {
  render() {
    return (
      <View style={styles.container}>
       <Question />
        <Text>Open up App.js to start working on your app!</Text>
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
});

export default  Main
