import React, { Component } from 'react';
import { ListView } from 'react-native';
import Translate from './translate/index';

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
                { text: "Bye", trans: "Tschüss" }, 
            ]),
        };
    }

    renderRow(rowData){
        return <Translate text={rowData.text} trans={rowData.trans}/>
    }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}
