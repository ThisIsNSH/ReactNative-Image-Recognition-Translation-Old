import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const instructions = Platform.select({
  ios: 'iOS',
  android: 'Android'
});

export default class App extends Component {

  constructor(props) {
    super(props)
    this.nextScreen = this.nextScreen.bind(this)
  }

  nextScreen(event) {
    console.log("button pressed")
  }

  render() {
    return (
      <LinearGradient colors={['#89f7fe', '#66a6ff']} style={styles.container}>
        <View style={styles.topView}>
          <Text style={styles.title}>TIRAT<Text style={styles.instructions}>{instructions}</Text></Text>
          <Text style={styles.subtitle}>Text in Image Recognition and Translation</Text>
        </View>
        <View style={styles.bottomView}>
          <TouchableHighlight>
            <LinearGradient colors={['#f3f3f3', '#fff']} style={styles.button}>
              <Text style={styles.getstarted} onPress={this.nextScreen}>Get Started</Text>
            </LinearGradient>
          </TouchableHighlight>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topView: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 65,
    textAlign: 'center',
    color: '#000',
    fontFamily: 'AvenirNextCondensed-Bold',
  },
  subtitle: {
    fontSize: 15,
    textAlign: 'center',
    color: '#000',
    fontFamily: 'AvenirNextCondensed-Bold',
  },
  instructions: {
    textAlign: 'center',
    fontFamily: 'AvenirNext-Regular',
    color: '#000',
    fontSize: 20,
  },
  button: {
    margin: 30,
    borderRadius: 20,
  },
  getstarted: {
    color: '#000000',
    fontSize: 15,
    fontFamily: 'AvenirNextCondensed-Bold',
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
  }
});
