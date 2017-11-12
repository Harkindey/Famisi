import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './src/Main';
import db from './src/db';
import color from './src/color'


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Main data={db} color={color}/>
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
