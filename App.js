import React, { Component } from 'react';
import { ListView, Picker, Text, ScrollView, View, StyleSheet } from 'react-native';
import Translate from './components/translation/translate/index';

export default class Translation extends Component {

  constructor(props) {
    super(props)

    this.text = ["Hello", "How are you?", "Good Morning", "What's your name?", "Thanks"];

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
      language: 'en',
      languages: []
    };

    this.updateLanguage = this.updateLanguage.bind(this);

  }

  componentDidMount() {
    return fetch('https://gateway-lon.watsonplatform.net/language-translator/api/v3/identifiable_languages?version=2018-05-01', {
      method: 'GET',
      headers: {
        'Authorization': 'Basic YXBpa2V5OndvSFF1MERhalpsOFFQc3FaUGF3OU92N080d2I4MmJVeXVPb0dMR0VwMFBh'
      }
    }).then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          languages: responseJson.languages,
        }, function () {

        });

      })
      .catch((error) => {
        console.error(error);
      });
  }

  updateLanguage = (language) => {
    console.log(language)
    this.setState({ language: language, dataSource: this.ds.cloneWithRows(this.bigData[0]) })
  }

  renderRow(rowData) {
    return <Translate text={rowData.text} trans={rowData.trans} />
  }

  render() {

    var pickers = [];
    var i;
    for (i = 0; i < this.state.languages.length; i++) {
      pickers.push(<Picker.Item key={this.state.languages[i].language} label={this.state.languages[i].name} value={this.state.languages[i].language} />);
    }

    return (
      <View>
        <ScrollView>
          <Picker selectedValue={this.state.language} onValueChange={this.updateLanguage}>
            { pickers }
          </Picker>
          <ListView
            style={{ paddingBottom: 48 }}
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