import React, { Component } from 'react';
import { ListView, StyleSheet } from 'react-native';
import Translate from './components/translation/translate/index';

export default class Translation extends Component {

    constructor(props) {
        super(props)
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows([
                { text: "Hello", trans: "Hallo" }, 
                { text: "How are you?", trans: "Wie geht es Ihnen" }, 
                { text: "Good Morning", trans: "Guten Morgen" }, 
                { text: "What's your name?", trans: "Wie heißen Sie?" }, 
                { text: "Thanks", trans: "Vielen Dank" }, 
                { text: "I'm at a party I don't wanna be at And I don't ever wear a suit and tie Wonderin' if I could sneak out the back Nobody's even lookin' me in my eyes Then you take my hand Finish my drink, say, \"Shall we dance?\" Hell, yeah You know I love you, did I ever tell you\? You make it better like that", trans: "Ich bin auf einer Party, auf der ich nicht sein will Und ich ziehe nie Anzug und Krawatte an. Ich frage mich, ob ich den Rücken herausschleichen kann. Niemand schaut mir überhaupt in die Augen. Dann nimmst du meine Hand. sag: \"Sollen wir tanzen?\" Zur Hölle, ja. Weißt du, ich liebe dich? Habe ich es dir jemals gesagt? Du machst es besser so" }, 
            ]),
        };
    }

    renderRow(rowData){
        return <Translate text={rowData.text} trans={rowData.trans}/>
    }

    render() {
        return (
            <ListView
                style={styles.container}
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 48,
    paddingBottom: 48,
    flex: 1
  },  
});