import React from 'react';

import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export default props => {
    return (
        <TouchableOpacity onPress={props.onClick} style={styles.view}>
            <Text style={styles.text}>{props.name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    view: {
        marginHorizontal: 3,
        marginVertical: 1.5,
        height: 45,
        padding: 15,
        borderRadius: 7,
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        fontSize: 18
    }
});