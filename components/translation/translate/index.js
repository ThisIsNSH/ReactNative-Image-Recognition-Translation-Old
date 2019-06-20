import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';

export default class Translate extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{this.props.text}</Text>
                <View style={{flexDirection: 'row',}}>
                    <LinearGradient colors={['#89f7fe', '#66a6ff']} style={styles.gradient}>
                        <Text style={styles.trans}>{this.props.trans}</Text>
                    </LinearGradient>
                </View>
            </View>
        );
    }
}

Translate.propTypes = {
    text: PropTypes.string,
    trans: PropTypes.string
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column'
    },
    text: {
        flex: 1,
        marginLeft: 36,
        marginRight: 36,
        paddingBottom: 4,
        paddingTop: 16,
        color: '#000',
        fontSize: 20,
        alignItems: 'flex-start',
        fontFamily: 'AvenirNextCondensed-Regular',
    },
    gradient: {
        marginLeft: 16,
        marginRight: 16,
        borderRadius: 20,
    },
    trans: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        color: '#000',
        fontSize: 20,
        alignItems: 'flex-start',
        fontFamily: 'AvenirNextCondensed-Medium',
    },
});
