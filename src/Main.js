import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements'
import Dimensions from 'Dimensions';
import Result from './Result'

const x = Dimensions.get('window').width;
const y = Dimensions.get('window').height;


// const Result = (props) => {
//   return (
//   <View style={{flex: 1 , backgroundColor: 'rgba(0,0,0,0.2)', justifyContent: 'center', alignItems: 'center'}}>
//     <Text>Correct</Text>
//   </View>
//   )
// }

class Main extends React.Component {
    constructor(props){
      super(props);
      this.state ={
        question : this.props.data,
        color: this.props.color,
        score: 0,
        modalVisible: false,
      }
    }

    componentWillMount(){
      
      if (!this.state.question){
          return (
            <Result />
          )
      }
      
    }
    renderQuestion() {
      console.log(this.state);
      let { question, color, score  } = this.state
      const index = Math.floor(Math.random() * question.length);
      const colorGroup= Math.floor(Math.random() * 50);
      const colorindex = Math.floor(Math.random() * 5);
      const colors = color[colorGroup];

      const checkAnswer = (id) => {
          //console.log(question[index].correctIndex, id);
          if (question[index].correctIndex === id){
            console.log('Correct Answer')
            question.splice(index, 1)
            this.setState({
              question,
              score:  score+=1
            })
            console.log(score);
          }else {
            console.log(score);
            console.log('Wrong Answer')
            this.setState({modalVisible: true});
          }
        }
      return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'column',}}>
          <Text style={[styles.word,{color: colors[colorindex]}]}>{question[index].word}</Text>
          <Text style={{fontSize: 20, paddingBottom: x * 0.5}}>{question[index].meaning}</Text>
          <View style={{flexDirection: 'column', justifyContent:'flex-end'}}>
          {question[index].options.map((item, index)=> {
            return(
              <View style={styles.innerStyle} key={index}>
                <Button 
                buttonStyle={styles.buttonStyle}
                large
                backgroundColor={colors[colorindex]}
                title={item}
                onPress={checkAnswer.bind(null,index)}
                />
              </View>
              )
          })}
          </View>      
          </View>
      )
    }
  render() {
    return (
      <View style={styles.container}>
        {this.renderQuestion()}
        {<Result show={this.state.modalVisible}/>}
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
