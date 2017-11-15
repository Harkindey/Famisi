import React from 'react';
import { StyleSheet, Text, View, Modal} from 'react-native';
import { Button } from 'react-native-elements'
import Dimensions from 'Dimensions';

const x = Dimensions.get('window').width;
const y = Dimensions.get('window').height;


class Main extends React.Component {
    constructor(props){
      super(props);
      this.state ={
        question : this.props.data,
        color: this.props.color,
        score: 0,
        ismodalVisible: false,
        finished: false
      }
    }

    componentWillMount(){    
    }

    renderResult(){
      let { show, finished, question, color, score } = this.state
      return (
        <View style={{top:y * 0.5, left:x * 0.5}}>
        <Modal
         animationType="fade"
         transparent={false}
         visible={show}
         onRequestClose={() => {alert("Modal has been closed.")}}
         >
           <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.4)'}}>
             <View>
               <Text style={{fontWeight: 'bold', fontSize: 30, fontWeight: 'bold'}}>{
                 (finished) ? 'FINAL SCORE' : 'GAME OVER'  
               }</Text>
               <Text style={{fontWeight: 'bold', fontSize: 30, fontWeight: 'bold'}}>SCORE: {score}</Text>
             </View>
             <View style={{flexDirection: 'row'}}>
             <Button 
                     buttonStyle={{borderRadius: 10, width: x * 0.4}}
                     large
                     backgroundColor='black'
                     title='Replay'
                     onPress={() => this.setState({
                       question : question,
                       color: color,
                       ismodalVisible: false
                     })}
                     />
           </View>
           </View>
         </Modal>
       </View>
      )
    }
  
    renderQuestion() {
      console.log(this.state);
      let { question, color, score  } = this.state
      const index = Math.floor(Math.random() * question.length);
      const colorGroup= Math.floor(Math.random() * 50);
      const colorindex = Math.floor(Math.random() * 5);
      const colors = color[colorGroup];

      const checkAnswer = (id) => { 
          if (question[index].correctIndex === id){
              if(question.length > 1){
                    console.log('Correct Answer')
                    question.splice(index, 1)
                    this.setState({
                      question,
                      score: score+=1
                    })
                  // console.log(score);
                  } else {
                  this.setState({
                    score:  score+=1,
                    finished: true,
                    ismodalVisible: true
                  })
                }
          }else {
            console.log(score);
            console.log('Wrong Answer')
            this.setState({ismodalVisible: true});
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
    if(this.state.ismodalVisible){
      return (
        <View>
          {this.renderResult()}
        </View>
      )
    }
    return (
      <View style={{flex:1}}>     
        <View style={styles.container}>
          {this.renderQuestion()}   
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
    height: y
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
