import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './src/Main';
import Result from './src/Result'
import db from './src/db';
import color from './src/color'


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Main data={db} color={color}/>
        {/* <Result /> */}
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
