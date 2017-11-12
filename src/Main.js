import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements'
import Dimensions from 'Dimensions';
//import Result from './Result'

const x = Dimensions.get('window').width;
const y = Dimensions.get('window').height;


const Result = (props) => {
  return (
  <View style={{flex: 1 , backgroundColor: 'rgba(0,0,0,0.2)', justifyContent: 'center', alignItems: 'center'}}>
    <Text>Correct</Text>
  </View>
  )
}

class Main extends React.Component {
    constructor(props){
      super(props);
    }

    componentWillMount(){
      console.log(this.props);
    }
    checkAnswer(choice){
      console.log(choice)
    }
    renderQuestion() {
        const index = Math.floor(Math.random() * 3)
        console.log(index);
        const colorGroup= Math.floor(Math.random() * 9)
        const colorindex = Math.floor(Math.random() * 5)

        const question = this.props.data[index]
        const colors = this.props.color[colorGroup]
      return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'column',}}>
          <Text style={styles.word,[colors.colorindex]}>{question.word}</Text>
          <Text style={{fontSize: 20, paddingBottom: x * 0.5}}>{question.meaning}</Text>
          <View style={{flexDirection: 'column', justifyContent:'flex-end'}}>
          {question.options.map((item, index)=> {
            return(
              <View style={styles.innerStyle} key={index}>
                <Button 
                buttonStyle={styles.buttonStyle}
                large
                backgroundColor={colors.colorindex}
                title={item}
                onPress={() => console.log(index)}
                />
              </View>
              )
          })}
            {/* <View style={styles.innerStyle}>
                <Button 
                buttonStyle={styles.buttonStyle}
                large
                backgroundColor="#1EB9B9"
                title={question.options[0]}
                onPress={() => console.log(this)}
                />
            </View>
            <View style={styles.innerStyle}>
                <Button
                large
                buttonStyle={styles.buttonStyle}
                backgroundColor="#1EB9B9"
                title={question.options[1]}
                onPress={() => console.log(this)}
                />
            </View>
            <View style={styles.innerStyle}>
                <Button 
                buttonStyle={styles.buttonStyle}
                large
                backgroundColor="#1EB9B9"
                title={question.options[2]}
                onPress={() => console.log(this)}
                />
            </View> */}
          </View>      
          </View>
      )
    }
  render() {
    return (
      <View style={styles.container}>
        {this.renderQuestion()}
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
