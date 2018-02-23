import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Welcome from './src/Welcome';
import Main from './src/Main';
import Result from './src/Result'



const MainNavigator = StackNavigator({
  welcome: { screen: Welcome },
  main: { screen: Main },
}, {
    headerMode: 'none'
  });

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MainNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
