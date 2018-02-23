import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements'
import Dimensions from 'Dimensions';
import db from './db';
import color from './color'

const colorGroup = Math.floor(Math.random() * 50);
const colorindex = Math.floor(Math.random() * 5);
const colors = color[colorGroup];

const x = Dimensions.get('window').width;
const y = Dimensions.get('window').height;

class Welcome extends Component {

    onButtonPress = () => {
        this.props.navigation.navigate('map');
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={[styles.word, { color: colors[colorindex] }]}>FÀMÌSI</Text>
                <View>
                    <View style={styles.innerStyle}>
                        <Button
                            buttonStyle={styles.buttonStyle}
                            large
                            backgroundColor={colors[colorindex]}
                            title='Easy'
                            onPress={() => this.props.navigation.navigate('main', { data: db.easy })}
                        />
                    </View>
                    <View style={styles.innerStyle}>
                        <Button
                            buttonStyle={styles.buttonStyle}
                            large
                            backgroundColor={colors[colorindex]}
                            title='Intermediate'
                            onPress={() => this.props.navigation.navigate('main', { data: db.intermediate })}
                        />
                    </View>
                    <View style={styles.innerStyle}>
                        <Button
                            buttonStyle={styles.buttonStyle}
                            large
                            backgroundColor={colors[colorindex]}
                            title='Hard'
                            onPress={() => this.props.navigation.navigate('main', { data: db.hard })}
                        />
                    </View>
                </View>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        height: y,

    },
    word: {
        color: '#1EB9B9',
        fontWeight: 'bold',
        fontSize: 40,
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

export default Welcome;
