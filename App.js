import React, { Component } from 'react';
import { ListView, Picker, Text, ScrollView, View, StyleSheet } from 'react-native';
import Translate from './components/translation/translate/index';

export default class Translation extends Component {

  constructor(props) {
    super(props)

    this.bigData = [
      [
        { text: "Hello", trans: "Hallo" },
        { text: "How are you?", trans: "Wie geht es Ihnen" },
        { text: "Good Morning", trans: "Guten Morgen" },
        { text: "What's your name?", trans: "Wie heißen Sie?" },
        { text: "Thanks", trans: "Vielen Dank" },
      ],
      [
        { text: "Hello", trans: "Bonjour" },
        { text: "How are you?", trans: "Comment vas-tu?" },
        { text: "Good Morning", trans: "Bonjour" },
        { text: "What's your name?", trans: "Quel est ton nom?" },
        { text: "Thanks", trans: "Merci" },
      ],
      [
        { text: "Hello", trans: "Hola" },
        { text: "How are you?", trans: "Cómo estás?" },
        { text: "Good Morning", trans: "Buenos días" },
        { text: "What's your name?", trans: "Cuál es tu nombre?" },
        { text: "Thanks", trans: "Gracias" },
      ]
    ];
    
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

    this.state = {
      dataSource: this.ds.cloneWithRows(this.bigData[0]),
      language: 0
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLanguage = (language) => {
    this.setState({ language: language, dataSource: this.ds.cloneWithRows(this.bigData[language]) })
  }

  renderRow(rowData) {
    return <Translate text={rowData.text} trans={rowData.trans} />
  }

  render() {
    return (
      <View>
        <ScrollView>
          <Picker selectedValue={this.state.language} onValueChange={this.updateLanguage}>
            <Picker.Item label="German" value={0} />
            <Picker.Item label="French" value={1} />
            <Picker.Item label="Spanish" value={2} />
          </Picker>
          <ListView
            style={{paddingBottom: 48}}
            dataSource={this.state.dataSource}
            renderRow={this.renderRow}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  picker: {
    color: '#ff0000',
    fontSize: 20,
    marginBottom: -20,
    fontFamily: 'AvenirNextCondensed-Regular'
  }
});