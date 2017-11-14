import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View } from 'react-native';
import Dimensions from 'Dimensions';
const x = Dimensions.get('window').width;
const y = Dimensions.get('window').height;

class Result extends Component {
  state = {
    modalVisible: false,
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    if(!this.props.show) {
      return null;
    }

    return (
      <View style={{flex: 1, flexDirection:'column', width: x*0.5 , height:y * 0.5  }}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.props.show}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
         <View style={{marginTop: 22}}>
          <View>
            <Text>Hello World!</Text>
            {/* <TouchableHighlight onPress={() => {
              this.setModalVisible(!this.state.modalVisible)
            }}>
              <Text>Hide Modal</Text>
            </TouchableHighlight> */}
          </View>
         </View>
        </Modal>
      </View>
    );
  }
}

export default Result

